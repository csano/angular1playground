describe("bar service tests", () => {
  let bazService: BazService;

  beforeEach(() => {
   bazService = {
      doSomething: () => {
        return "inside baz";
      }
    };
  });

  var _q_ : ng.IQService;
  beforeEach(inject(($q) => {
    _q_ = $q;
  }));

  it("invokes the doSomething method on the Foo service", () => {
    const foo = jasmine.createSpyObj("FooService", ["doSomething", "doSomethingElse"]);
    const car = jasmine.createSpyObj("CarService", ["retrieveCars"]);
     foo.doSomething.and.returnValue("inside foo");

    const bar = new BarService(foo, bazService, car);

    expect(bar.doSomethingWithFoo()).toBe("inside foo");
  });

  it("invokes the doSomething method on the Baz service", () => {
    const foo = jasmine.createSpyObj("FooService", ["doSomething", "doSomethingElse"]);
    const car = jasmine.createSpyObj("CarService", ["retrieveCars"]);

    const bar = new BarService(foo, bazService, car);

    expect(bar.doSomethingWithBaz()).toBe("inside baz");
  });

  it("invokes the doSomething method on the Baz service via a stub", () => {
    const foo = jasmine.createSpyObj("FooService", ["doSomething", "doSomethingElse"]);
    const car = jasmine.createSpyObj("CarService", ["retrieveCars"]);
    const returnValue = "returnValue";
    spyOn(bazService, "doSomething").and.stub().and.returnValue(returnValue);

    const bar = new BarService(foo, bazService, car);

    expect(bar.doSomethingWithBaz()).toBe(returnValue);
  });

  it("handles car service promise", () => {
    const foo = jasmine.createSpyObj("FooService", ["doSomething", "doSomethingElse"]);
    const car = jasmine.createSpyObj("CarService", ["retrieveCars"]);
    const returnValue = "returnValue";
    const bmw = jasmine.createSpyObj("car", ["move"]);
    spyOn(bazService, "doSomething").and.stub().and.returnValue(returnValue);
    spyOn(car, 'retrieveCars').and.callFake(() => {
      var deferred = this.$q.defer();
      deferred.resolve((car: Car) => {
        return bmw;
      });
    });

    const bar = new BarService(foo, bazService, car);
    bar.moveCars();

    expect(car.move).toHaveBeenCalled();

  });



});


