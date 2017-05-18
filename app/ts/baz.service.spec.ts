
describe('foo', () => {
  let promiseService: PromiseService;
  beforeEach(() => {
    promiseService = jasmine.createSpyObj<PromiseService>('promiseService', ['returnsPromise']);
  });

  it('invokes promise', () => {
    const promise = new Promise((resolve, reject) => {
      console.log(resolve());

    });

    promiseService = {
      returnsPromise: () => new Promise<string>((resolve, reject) => {
        if (resolve) {
          console.log('inside promise');
          return 'inside';
        }
      })
    };
    const service = new BazService(promiseService);

    // (promiseService.returnsPromise as jasmine.Spy).and.returnValue(promise);

    service.doSomethingWithPromise();
  });

});