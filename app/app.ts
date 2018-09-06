class MyController {
  public name: String = 'Chris!';
  constructor() {
    console.log('test');
  }
}

angular
  .module('myApp', [])
  .controller('MyController', [MyController])
  .component('hello-world', {
    templateUrl: 'components/hello-world.html'
  });
