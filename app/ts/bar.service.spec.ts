describe("bar service tests", () => {
  let bazService: BazService;

  beforeEach(() => {
   bazService = {
      doSomething: () => {
        return "inside baz";
      }
    };
  });

  let _q_: ng.IQService;
  let $scope: ng.IScope;
  beforeEach(inject(($q, $rootScope) => {
    _q_ = $q;
    $scope = $rootScope.$new();
  }));

  const foo = jasmine.createSpyObj("FooService", ["doSomething", "doSomethingElse"]);
  const car = jasmine.createSpyObj("CarService", ["retrieveCars"]);

  it("invokes the doSomething method on the Foo service", () => {
    foo.doSomething.and.returnValue("inside foo");

    const bar = new BarService(foo, bazService, car);

    expect(bar.doSomethingWithFoo()).toBe("inside foo");
  });

  it("invokes the doSomething method on the Baz service", () => {
    const bar = new BarService(foo, bazService, car);

    expect(bar.doSomethingWithBaz()).toBe("inside baz");
  });

  it("invokes the doSomething method on the Baz service via a stub", () => {
    const returnValue = "returnValue";
    spyOn(bazService, "doSomething").and.stub().and.returnValue(returnValue);

    const bar = new BarService(foo, bazService, car);

    expect(bar.doSomethingWithBaz()).toBe(returnValue);
  });

  it("handles car service promise", () => {
    const bmw = jasmine.createSpyObj("car", ["move"]);

    car.retrieveCars.and.returnValue(_q_.resolve(bmw));

    const bar = new BarService(foo, bazService, car);
    bar.moveCars();

    $scope.$apply();

    expect(bmw.move).toHaveBeenCalled();
  });
});
