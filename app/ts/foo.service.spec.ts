describe("foo service tests", () => {
  let _resource_, _q_;

  beforeEach(angular.mock.module("testModule"));

  beforeEach(() => {
    inject(($resource, $q) => {
      _resource_ = $resource;
      _q_ = $q;
    });
  });

  it("verify that resource is defined", () => {
    expect(_resource_).toBeDefined();
  });
});