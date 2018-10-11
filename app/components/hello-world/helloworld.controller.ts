class HelloWorldController {
  public name: String = 'World!';
  constructor($scope: ng.IScope) {
  }
}

angular
  .module('myApp')
  .component('helloWorld', {
    templateUrl: './components/hello-world/hello-world.html',
    bindings: {
      name: '<'
    }
  });
