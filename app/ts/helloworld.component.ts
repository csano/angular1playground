class HelloWorldController {
  public name: String = "World!";
  constructor($scope: ng.IScope) {
    $scope.name = this.name;
  }
}

angular.
  module("components", []).
  component("helloWorld", {
    template: `<h1>Hello, {{name}}</h1>`,
    controller: HelloWorldController
  });