class Car {
  constructor(public name: String) {

  }

  public move(): void {

  }
}

class Engine {
  constructor() {

  }
}


class CarService {
  private _$q_: ng.IQService;
  constructor($q: ng.IQService) {
    this._$q_ = $q;
  }

  public retrieveCars() : ng.IPromise<Car> {
    var deferred = this._$q_.defer();
    deferred.resolve((car: Car) => {
      return new Car("Ford");
    });
    deferred.reject(() => {

    });
    return deferred.promise;
  }
}