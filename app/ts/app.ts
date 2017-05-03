'use strict'; //do we need this?

/* App Module */

/*
@csano You're not specifying the dependencies when registering Foo.
You need to do the exact same thing as you're doing with MyController.
.service('Foo', ($resource, $q) => .service('Foo', ['$resource', '$q', ($resource, $q)
And you shouldn't make use of arrow's for services and controllers as you're unable to use new on an arrow function.
If you're using TypeScript you should use classes as services and controllers.
So: service('myService', ServiceClass) and controller('myController', ControllerClass)
*/

// m.controller('MyController', ['$scope', 'Foo', ($scope, f) => {
//   console.log('here');
// }]);


var m = angular.module('myApp', ['ngRoute', 'ngResource', 'testModule']);

class FooService {
  constructor(private $resource: ng.resource.IResourceService, $q: ng.IQService) { 
    
  }
}

class MyController {
  constructor(foo: FooService) {
    console.log('controller constructor');
  }
}

angular
  .module('testModule', [])
  .service('Foo', ['$resource', '$q', FooService])
  .controller('MyController', ['Foo', MyController]);

// class BarService {
//   constructor(private foo: FooService) {
//     console.log('bar');
//   }
// }

// var m: ng.IModule = angular.module('testServices', []);

// m.service('Foo', ($resource, $q) => {
//   return new FooService($resource, $q);
// });

// m.service('Bar', (FooService) => {
//   return new BarService(FooService);
// });
// function GreetUserController() {
//   this.user = 'world';
// }

// angular.
//   module('testServices').
//   component('helloWorld', {
//     template: 'Hello, {{$ctrl.user}}!',
//     controller: ['Foo', GreetUserController]
//   })
