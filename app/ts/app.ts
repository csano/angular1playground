class MyController {
  constructor(foo: FooService) {
    console.log(foo.doSomething());
  }
}

const m = angular.module("myApp", ["ngRoute", "ngResource", "testModule", "components"]);

m.controller("MyController", ["Foo", MyController]);