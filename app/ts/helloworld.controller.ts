class HelloWorldController {
  public name: String = 'World!';
  constructor($scope: ng.IScope, myCar) {
    $scope.name = this.name;
  }
}
