class MyController {
  constructor(foo: FooService) {
    console.log(foo.doSomething());
  }
}

angular
  .module("myApp")
  .controller("MyController", ["Foo", MyController]);