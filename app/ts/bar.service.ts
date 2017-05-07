class BarService {
  constructor(private foo: FooService) {

  }

  public doSomethingWithFoo(): String {
    return this.foo.doSomething();
  }
}