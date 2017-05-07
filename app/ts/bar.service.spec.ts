describe("my test", () => {
  it("invokes the doSomething method on the Foo service", () => {
    const foo = jasmine.createSpyObj("FooService", ["doSomething", "doSomethingElse"]);
    foo.doSomething.and.returnValue("inside foo");

    const bar = new BarService(foo);

    expect(bar.doSomethingWithFoo()).toBe("inside foo");
  });
});


