angular
  .module('myApp')
  .component('helloWorld', {
    templateUrl: './components/hello-world/hello-world.html',
    bindings: {
      name: '<'
    }
  });
