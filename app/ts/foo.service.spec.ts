describe("bar service tests", () => {
  let _resource_, _q_;

  beforeEach(inject(function($resource, $q) {
    _resource_ = $resource;
    _q_ = $q;
  }));
  it("should verify that resource is used", () => {
    console.log(_resource_);


  });
});