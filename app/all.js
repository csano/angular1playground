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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHMvYXBwLnRzIiwidHMvZm9vLnNlcnZpY2UudHMiLCJ0cy9oZWxsb3dvcmxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFFYjtJQUNFLHNCQUFZLEdBQWU7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUVELElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUV2RixDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0FDUnBEO0lBQ0Usb0JBQW9CLFNBQXVDLEVBQUUsRUFBZ0I7UUFBekQsY0FBUyxHQUFULFNBQVMsQ0FBOEI7SUFFM0QsQ0FBQztJQUNNLGdDQUFXLEdBQWxCO1FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQUVELE9BQU87S0FDSixNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztLQUN4QixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FDWG5EO0lBRUUsOEJBQVksTUFBaUI7UUFEdEIsU0FBSSxHQUFZLFFBQVEsQ0FBQTtRQUU3QixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRCxPQUFPO0lBQ0wsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7SUFDeEIsU0FBUyxDQUFDLFlBQVksRUFBRTtJQUN0QixRQUFRLEVBQUUsMEJBQTBCO0lBQ3BDLFVBQVUsRUFBRSxvQkFBb0I7Q0FDakMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnOyBcblxuY2xhc3MgTXlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoZm9vOiBGb29TZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coZm9vLmRvU29tZXRoaW5nKCkpO1xuICB9XG59XG5cbnZhciBtID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJywgWyduZ1JvdXRlJywgJ25nUmVzb3VyY2UnLCAndGVzdE1vZHVsZScsICdjb21wb25lbnRzJ10pO1xuXG5tLmNvbnRyb2xsZXIoJ015Q29udHJvbGxlcicsIFsnRm9vJywgTXlDb250cm9sbGVyXSk7IiwiJ3VzZSBzdHJpY3QnOyBcblxuY2xhc3MgRm9vU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlLCAkcTogbmcuSVFTZXJ2aWNlKSB7IFxuICAgIFxuICB9XG4gIHB1YmxpYyBkb1NvbWV0aGluZygpIDogU3RyaW5nIHtcbiAgICByZXR1cm4gXCJpbnNpZGUgZm9vXCI7XG4gIH1cbn1cblxuYW5ndWxhclxuICAubW9kdWxlKCd0ZXN0TW9kdWxlJywgW10pXG4gIC5zZXJ2aWNlKCdGb28nLCBbJyRyZXNvdXJjZScsICckcScsIEZvb1NlcnZpY2VdKTtcbiIsIlxuXG5jbGFzcyBIZWxsb1dvcmxkQ29udHJvbGxlciB7XG4gIHB1YmxpYyBuYW1lIDogU3RyaW5nID0gJ1dvcmxkISdcbiAgY29uc3RydWN0b3IoJHNjb3BlOiBuZy5JU2NvcGUpIHtcbiAgICAkc2NvcGUubmFtZSA9IHRoaXMubmFtZTtcbiAgfVxufVxuXG5hbmd1bGFyLlxuICBtb2R1bGUoJ2NvbXBvbmVudHMnLCBbXSkuXG4gIGNvbXBvbmVudCgnaGVsbG9Xb3JsZCcsIHtcbiAgICB0ZW1wbGF0ZTogYDxoMT5IZWxsbywge3tuYW1lfX08L2gxPmAsXG4gICAgY29udHJvbGxlcjogSGVsbG9Xb3JsZENvbnRyb2xsZXJcbiAgfSk7Il19