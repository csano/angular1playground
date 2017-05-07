angular
  .module("testModule", ["ngResource"])
  .service("Foo", ["$resource", "$q", FooService])
  .service("Bar", ["Foo", BarService]);
