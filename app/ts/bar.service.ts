class BarService {
  constructor(private foo: FooService, private baz: BazService, private carService: CarService) {

  }

  public doSomethingWithFoo(): String {
    return this.foo.doSomething();
  }

  public doSomethingWithBaz() {
    return this.baz.doSomething();
  }

  public invokeBazWithNumber(num: number) {
    this.baz.doSomethingWithNumber(num);
  }

  public moveCars(): void {
    this.carService.retrieveCars().then((car: Car) => {
      console.log('callback');
      console.log(car);
      car.move();
    });
  }

  public retrieveFord(): Car {
    return this.carService.retrieveCar('Ford', 1);
  }
}