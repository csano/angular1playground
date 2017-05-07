class HelloWorldController {
  public name: String = "World!";
  constructor($scope: ng.IScope) {
    $scope.name = this.name;
  }
}
