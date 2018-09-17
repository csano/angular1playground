class MyController {
  public name: String = 'Chris!';
  constructor() {
    console.log('test');
  }
}

angular
  .module('myApp')
  .controller('MyController', [MyController]);
