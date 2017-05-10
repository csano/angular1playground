class BarService {
  constructor(private foo: FooService, private baz: BazService, private carService: CarService) {

  }

  public doSomethingWithFoo(): String {
    return this.foo.doSomething();
  }

  public doSomethingWithBaz() {
    return this.baz.doSomething();
  }
  public moveCars(): void {
    this.carService.retrieveCars().then((car: Car) => {
      console.log("callback");
      console.log(car);
      car.move();
    });
  }
}
