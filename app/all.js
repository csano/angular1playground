'use strict';
var MyController = (function () {
    function MyController(foo) {
        console.log(foo.doSomething());
    }
    return MyController;
}());
var m = angular.module('myApp', ['ngRoute', 'ngResource', 'testModule', 'components']);
m.controller('MyController', ['Foo', MyController]);
var FooService = (function () {
    function FooService($resource, $q) {
        this.$resource = $resource;
    }
    FooService.prototype.doSomething = function () {
        return "inside foo";
    };
    return FooService;
}());
angular
    .module('testModule', [])
    .service('Foo', ['$resource', '$q', FooService]);
var HelloWorldController = (function () {
    function HelloWorldController($scope) {
        this.name = 'World!';
        $scope.name = this.name;
    }
    return HelloWorldController;
}());
angular.
    module('components', []).
    component('helloWorld', {
    template: "<h1>Hello, {{name}}</h1>",
    controller: HelloWorldController
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHMvYXBwLnRzIiwidHMvZm9vLnNlcnZpY2UudHMiLCJ0cy9oZWxsb3dvcmxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFFYjtJQUNFLHNCQUFZLEdBQWU7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUVELElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUV2RixDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0FDUnBEO0lBQ0Usb0JBQW9CLFNBQXVDLEVBQUUsRUFBZ0I7UUFBekQsY0FBUyxHQUFULFNBQVMsQ0FBOEI7SUFFM0QsQ0FBQztJQUNNLGdDQUFXLEdBQWxCO1FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQUVELE9BQU87S0FDSixNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztLQUN4QixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FDWG5EO0lBRUUsOEJBQVksTUFBaUI7UUFEdEIsU0FBSSxHQUFZLFFBQVEsQ0FBQTtRQUU3QixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUVELE9BQU87SUFDTCxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztJQUN4QixTQUFTLENBQUMsWUFBWSxFQUFFO0lBQ3RCLFFBQVEsRUFBRSwwQkFBMEI7SUFDcEMsVUFBVSxFQUFFLG9CQUFvQjtDQUNqQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7IFxuXG5jbGFzcyBNeUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihmb286IEZvb1NlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZyhmb28uZG9Tb21ldGhpbmcoKSk7XG4gIH1cbn1cblxudmFyIG0gPSBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBbJ25nUm91dGUnLCAnbmdSZXNvdXJjZScsICd0ZXN0TW9kdWxlJywgJ2NvbXBvbmVudHMnXSk7XG5cbm0uY29udHJvbGxlcignTXlDb250cm9sbGVyJywgWydGb28nLCBNeUNvbnRyb2xsZXJdKTsiLCIndXNlIHN0cmljdCc7IFxuXG5jbGFzcyBGb29TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSAkcmVzb3VyY2U6IG5nLnJlc291cmNlLklSZXNvdXJjZVNlcnZpY2UsICRxOiBuZy5JUVNlcnZpY2UpIHsgXG4gICAgXG4gIH1cbiAgcHVibGljIGRvU29tZXRoaW5nKCkgOiBTdHJpbmcge1xuICAgIHJldHVybiBcImluc2lkZSBmb29cIjtcbiAgfVxufVxuXG5hbmd1bGFyXG4gIC5tb2R1bGUoJ3Rlc3RNb2R1bGUnLCBbXSlcbiAgLnNlcnZpY2UoJ0ZvbycsIFsnJHJlc291cmNlJywgJyRxJywgRm9vU2VydmljZV0pO1xuIiwiXG5cbmNsYXNzIEhlbGxvV29ybGRDb250cm9sbGVyIHtcbiAgcHVibGljIG5hbWUgOiBTdHJpbmcgPSAnV29ybGQhJ1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IG5nLklTY29wZSkge1xuICAgICRzY29wZS5uYW1lID0gbmFtZTtcbiAgfVxufVxuXG5hbmd1bGFyLlxuICBtb2R1bGUoJ2NvbXBvbmVudHMnLCBbXSkuXG4gIGNvbXBvbmVudCgnaGVsbG9Xb3JsZCcsIHtcbiAgICB0ZW1wbGF0ZTogYDxoMT5IZWxsbywge3tuYW1lfX08L2gxPmAsXG4gICAgY29udHJvbGxlcjogSGVsbG9Xb3JsZENvbnRyb2xsZXJcbiAgfSk7Il19