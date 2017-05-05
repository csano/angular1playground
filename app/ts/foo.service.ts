
class FooService {
  constructor(private $resource: ng.resource.IResourceService, $q: ng.IQService) { }
  public doSomething(): String {
    return "inside foo";
  }
}

angular
  .module("testModule", [])
  .service("Foo", ["$resource", "$q", FooService]);
