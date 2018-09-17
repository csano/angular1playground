class MyController {
  public name: String = 'Chris!';
  constructor() {
    console.log('test');
  }
}

angular
  .module('myApp', ['ngRoute'])
  .controller('MyController', [MyController])
  .component('helloWorld', {
    templateUrl: './components/hello-world/hello-world.html',
    bindings: {
      name: '<'
    }
  });
