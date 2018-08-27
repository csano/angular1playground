angular
  .module('myApp', ['ngRoute'])
  .component('helloWorld', {
    template: `<h1>Hello, {{name}}</h1>`,
    controller: HelloWorldController
  });
