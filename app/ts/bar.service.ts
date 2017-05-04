class BarService {
  constructor(foo: FooService) {

  }

  public doSomethingWithFoo() : void {

  }
}

angular
  .module('testModule', [])
  .service('Bar', ['Foo', BarService]);

