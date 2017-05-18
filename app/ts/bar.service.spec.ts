
describe('my test', () => {
  let bazService: BazService;

  beforeEach(() => {
    bazService = jasmine.createSpyObj<BazService>('BazService', ['doSomething', 'doSomethingWithPromise', 'doSomethingWithNumber']);
  });

  it('invokes the doSomething method on the Foo service', () => {
    const foo = jasmine.createSpyObj('FooService', ['doSomething', 'doSomethingElse']);
     foo.doSomething.and.returnValue('inside foo');

    const bar = new BarService(foo, bazService);

    expect(bar.doSomethingWithFoo()).toBe('inside foo');
  });

  it('invokes the doSomething method on the Baz service', () => {
    const foo = jasmine.createSpyObj('FooService', ['doSomething', 'doSomethingElse']);
    (bazService.doSomething as jasmine.Spy).and.stub().and.returnValue('inside baz');

    const bar = new BarService(foo, bazService);

    expect(bar.doSomethingWithBaz()).toBe('inside baz');
  });

  it('invokes the doSomething method on the Baz service via a stub', () => {
    const foo = jasmine.createSpyObj('FooService', ['doSomething', 'doSomethingElse']);
    const returnValue = 'returnValue';
    (bazService.doSomething as jasmine.Spy).and.stub().and.returnValue(returnValue);

    const bar = new BarService(foo, bazService);

    expect(bar.doSomethingWithBaz()).toBe(returnValue);
  });

  it('verifies doSomethingWithNumber is invoked with the number 5', () => {
    const foo = jasmine.createSpyObj('FooService', ['doSomething', 'doSomethingElse']);
    const baz = (bazService.doSomethingWithNumber as jasmine.Spy).and.callFake(() => {});
    const expectedResult = 5;
    const bar = new BarService(foo, bazService);

    bar.invokeBazWithNumber(expectedResult);

    expect(bazService.doSomethingWithNumber).toHaveBeenCalledWith(expectedResult);
  });

});
