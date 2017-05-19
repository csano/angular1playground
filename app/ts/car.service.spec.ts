
describe("car service tests", () => {
  let _q_;

  beforeEach(angular.mock.module("testModule"));

  beforeEach(inject(($q) => {
    _q_ = $q;
  }));

  it("verify that $q is defined", () => {
    console.log(_q_);
    expect(_q_).toBeDefined();
  });

  describe("retrieving cars", () => {
    it("should be a Ford", () => {
      const service = new CarService(_q_);
      service.retrieveCars().then((car: Car) => {
        expect(car.name).toBe("Ford");
      });
    });
    /*
    it("stubbed service should return promise with BMW", () => {
      const service = new CarService(_q_);
      spyOn(service, "retrieveCars").and.callFake(() => {
        const deferred = _q_.defer();
        deferred.resolve((car: Car) => {
          return new Car("BMW");
        });
        return deferred.promise;
      });
      service.retrieveCars().then((car: Car) => {
        expect(car.name).toBe("Ford");
      });
    })
    */

  });
});
