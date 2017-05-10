describe("my test", () => {
  let bazService: BazService;

  beforeEach(() => {
   bazService = {
      doSomething: () => {
        return "inside baz";
      },
      doSomethingWithNumber: (num: number) => {

      }
    };
  });

  it("invokes the doSomething method on the Foo service", () => {
    const foo = jasmine.createSpyObj("FooService", ["doSomething", "doSomethingElse"]);
     foo.doSomething.and.returnValue("inside foo");

    const bar = new BarService(foo, bazService);

    expect(bar.doSomethingWithFoo()).toBe("inside foo");
  });

  it("invokes the doSomething method on the Baz service", () => {
    const foo = jasmine.createSpyObj("FooService", ["doSomething", "doSomethingElse"]);

    const bar = new BarService(foo, bazService);

    expect(bar.doSomethingWithBaz()).toBe("inside baz");
  });

  it("invokes the doSomething method on the Baz service via a stub", () => {
    const foo = jasmine.createSpyObj("FooService", ["doSomething", "doSomethingElse"]);
    const returnValue = "returnValue";
    spyOn(bazService, "doSomething").and.stub().and.returnValue(returnValue);

    const bar = new BarService(foo, bazService);

    expect(bar.doSomethingWithBaz()).toBe(returnValue);
  });

  it("verifies doSomethingWithNumber is invoked with the number 5", () => {
    const foo = jasmine.createSpyObj("FooService", ["doSomething", "doSomethingElse"]);
    const baz = spyOn(bazService, "doSomethingWithNumber").and.callFake(() => {});
    const expectedResult = 5;
    const bar = new BarService(foo, bazService);

    bar.invokeBazWithNumber(expectedResult);

    expect(bazService.doSomethingWithNumber).toHaveBeenCalledWith(expectedResult);
  });

});
