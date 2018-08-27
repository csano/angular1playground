class MyController {
  constructor() {
    console.log('test');
  }
}

angular
  .module('myApp')
  .controller('MyController', [MyController]);