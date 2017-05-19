angular
  .module('testModule', ['ngResource'])
  .service('Foo', ['$resource', '$q', FooService])
  .service('Bar', ['Foo', BarService])
  .service('Promise', BazService)
  .service('Baz', [PromiseService])
  .service('Car', ['$q', CarService])
  .factory('mycar', (baz: BazService) : Car => {
    return new Car('foo');
  });
