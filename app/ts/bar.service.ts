class BarService {
  constructor(private foo: FooService, private baz: BazService) {

  }

  public doSomethingWithFoo(): String {
    return this.foo.doSomething();
  }

  public doSomethingWithBaz() {
    return this.baz.doSomething();
  }

  public invokeBazWithNumber(num: number) {
    this.baz.doSomethingWithNumber(num);
  }
}
