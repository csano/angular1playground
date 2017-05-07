  angular
  .module("components")
  .component("helloWorld", {
    template: `<h1>Hello, {{name}}</h1>`,
    controller: HelloWorldController
  });