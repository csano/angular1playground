class BazService {


  constructor(private promiseService: PromiseService) {
  }
  public doSomething(): String {
    return 'inside baz';
  }

  public doSomethingWithNumber(num: number) {

  }

  public doSomethingWithPromise() {
    this.promiseService.returnsPromise().then((s) => {
      console.log('inside promise');
      return s;
    });
  }
}
