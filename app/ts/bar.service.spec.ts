describe('bar service tests', () => {
  let bazService: BazService;

  beforeEach(() => {
    bazService = jasmine.createSpyObj<BazService>('BazService', ['doSomething', 'doSomethingWithPromise', 'doSomethingWithNumber']);
  });

  let _q_: ng.IQService;
  let $scope: ng.IScope;
  beforeEach(inject(($q, $rootScope) => {
    _q_ = $q;
    $scope = $rootScope.$new();
  }));

  const foo = jasmine.createSpyObj('FooService', ['doSomething', 'doSomethingElse']);
  const car = jasmine.createSpyObj('CarService', ['retrieveCars', 'retrieveCar']);

  it('invokes the doSomething method on the Foo service', () => {
    foo.doSomething.and.returnValue('inside foo');

    const bar = new BarService(foo, bazService, car);

    expect(bar.doSomethingWithFoo()).toBe('inside foo');
  });

  it('invokes the doSomething method on the Baz service', () => {
    const foo = jasmine.createSpyObj('FooService', ['doSomething', 'doSomethingElse']);
    (bazService.doSomething as jasmine.Spy).and.stub().and.returnValue('inside baz');

    const bar = new BarService(foo, bazService, car);

    expect(bar.doSomethingWithBaz()).toBe('inside baz');
  });

  it('invokes the doSomething method on the Baz service via a stub', () => {
    const foo = jasmine.createSpyObj('FooService', ['doSomething', 'doSomethingElse']);
    const returnValue = 'returnValue';
    (bazService.doSomething as jasmine.Spy).and.stub().and.returnValue(returnValue);

    const bar = new BarService(foo, bazService, car);

    expect(bar.doSomethingWithBaz()).toBe(returnValue);
  });

  it('verifies doSomethingWithNumber is invoked with the number 5', () => {
    const foo = jasmine.createSpyObj('FooService', ['doSomething', 'doSomethingElse']);
    const baz = (bazService.doSomethingWithNumber as jasmine.Spy).and.callFake(() => {});
    const expectedResult = 5;
    const bar = new BarService(foo, bazService, car);

    bar.invokeBazWithNumber(expectedResult);

    expect(bazService.doSomethingWithNumber).toHaveBeenCalledWith(expectedResult);
  });

  it('handles car service promise', () => {
    const bmw = jasmine.createSpyObj('Car', ['move']);

    car.retrieveCars.and.returnValue(_q_.resolve(bmw));

    const bar = new BarService(foo, bazService, car);
    bar.moveCars();

    $scope.$apply();

    expect(bmw.move).toHaveBeenCalled();
  });

  it('then is invoked on car service promise', () => {
    const bmw = jasmine.createSpyObj('Car', ['move']);

    const promiseFake = {
      then: () => {
        console.log('fake');
      }
    } as any;

    const fakePromise = jasmine.createSpyObj(promiseFake, ['then']);

    car.retrieveCars.and.returnValue(fakePromise);

    const bar = new BarService(foo, bazService, car);
    bar.moveCars();

    $scope.$apply();

    expect(fakePromise.then).toHaveBeenCalled();
    console.log(fakePromise.then.calls.all());
  });

  it('verifies that retreiveCar is invoke with the expected parameter', () => {
    const bar = new BarService(foo, bazService, car);

    const result = bar.retrieveFord();

    const list = car.retrieveCar.calls.all();
    expect(list[0].args[0]).toBe('Ford');
    expect(list[0].args[1]).toBe(1);
  });
});
