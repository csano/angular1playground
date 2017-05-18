angular
  .module('testModule', ['ngResource'])
  .service('Foo', ['$resource', '$q', FooService])
  .service('Bar', ['Foo', BarService])
  .service('Promise', BazService)
  .service('Baz', [PromiseService]);
