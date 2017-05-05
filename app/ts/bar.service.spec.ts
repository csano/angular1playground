describe("my test", () => {
  const FooServiceMock = {
    doSomething: () => {
      return "hi";
    }
  };
  it("invokes the doSomething method on the Foo service", () => {
    const foo = jasmine.createSpyObj("boo", ["doSomething"]);
    const bar = new BarService(FooServiceMock);
    
    expect(bar.doSomethingWithFoo()).toBe("inside foo");
  });
});

