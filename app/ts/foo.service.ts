
class FooService {
  constructor(private $resource: ng.resource.IResourceService, private $q: ng.IQService) { }
  public doSomething(): String {
    return "inside foo";
  }
  public doSomethingElse(): String {
    return "doing something else";
  }

}