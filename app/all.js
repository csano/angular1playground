'use strict';
var MyController = (function () {
    function MyController(foo) {
        console.log(foo.doSomething());
    }
    return MyController;
}());
var m = angular.module('myApp', ['ngRoute', 'ngResource', 'testModule', 'components']);
m.controller('MyController', ['Foo', MyController]);
// describe('my test', () => {
//   it('something', () => {
//     expect(true).toBe(false);
//   })
// }); 
var BarService = (function () {
    function BarService(foo) {
    }
    BarService.prototype.doSomethingWithFoo = function () {
    };
    return BarService;
}());
angular
    .module('testModule', [])
    .service('Bar', ['Foo', BarService]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHMvYXBwLnRzIiwidHMvYmFyLnNlcnZpY2Uuc3BlYy50cyIsInRzL2Jhci5zZXJ2aWNlLnRzIiwidHMvZm9vLnNlcnZpY2UudHMiLCJ0cy9oZWxsb3dvcmxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFFYjtJQUNFLHNCQUFZLEdBQWU7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUVELElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUV2RixDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0FDVnBELDhCQUE4QjtBQUM5Qiw0QkFBNEI7QUFDNUIsZ0NBQWdDO0FBQ2hDLE9BQU87QUFDUCxNQUFNO0FDSk47SUFDRSxvQkFBWSxHQUFlO0lBRTNCLENBQUM7SUFFTSx1Q0FBa0IsR0FBekI7SUFFQSxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQUVELE9BQU87S0FDSixNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztLQUN4QixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUNWdkM7SUFDRSxvQkFBb0IsU0FBdUMsRUFBRSxFQUFnQjtRQUF6RCxjQUFTLEdBQVQsU0FBUyxDQUE4QjtJQUUzRCxDQUFDO0lBQ00sZ0NBQVcsR0FBbEI7UUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBRUQsT0FBTztLQUNKLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO0tBQ3hCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUNYbkQ7SUFFRSw4QkFBWSxNQUFpQjtRQUR0QixTQUFJLEdBQVksUUFBUSxDQUFBO1FBRTdCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMxQixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUVELE9BQU87SUFDTCxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztJQUN4QixTQUFTLENBQUMsWUFBWSxFQUFFO0lBQ3RCLFFBQVEsRUFBRSwwQkFBMEI7SUFDcEMsVUFBVSxFQUFFLG9CQUFvQjtDQUNqQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7IFxuXG5jbGFzcyBNeUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihmb286IEZvb1NlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZyhmb28uZG9Tb21ldGhpbmcoKSk7XG4gIH1cbn1cblxudmFyIG0gPSBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBbJ25nUm91dGUnLCAnbmdSZXNvdXJjZScsICd0ZXN0TW9kdWxlJywgJ2NvbXBvbmVudHMnXSk7XG5cbm0uY29udHJvbGxlcignTXlDb250cm9sbGVyJywgWydGb28nLCBNeUNvbnRyb2xsZXJdKTsiLCIvLyBkZXNjcmliZSgnbXkgdGVzdCcsICgpID0+IHtcbi8vICAgaXQoJ3NvbWV0aGluZycsICgpID0+IHtcbi8vICAgICBleHBlY3QodHJ1ZSkudG9CZShmYWxzZSk7XG4vLyAgIH0pXG4vLyB9KTsiLCJjbGFzcyBCYXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoZm9vOiBGb29TZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBkb1NvbWV0aGluZ1dpdGhGb28oKSA6IHZvaWQge1xuXG4gIH1cbn1cblxuYW5ndWxhclxuICAubW9kdWxlKCd0ZXN0TW9kdWxlJywgW10pXG4gIC5zZXJ2aWNlKCdCYXInLCBbJ0ZvbycsIEJhclNlcnZpY2VdKTtcblxuIiwiJ3VzZSBzdHJpY3QnOyBcblxuY2xhc3MgRm9vU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlLCAkcTogbmcuSVFTZXJ2aWNlKSB7IFxuICAgIFxuICB9XG4gIHB1YmxpYyBkb1NvbWV0aGluZygpIDogU3RyaW5nIHtcbiAgICByZXR1cm4gXCJpbnNpZGUgZm9vXCI7XG4gIH1cbn1cblxuYW5ndWxhclxuICAubW9kdWxlKCd0ZXN0TW9kdWxlJywgW10pXG4gIC5zZXJ2aWNlKCdGb28nLCBbJyRyZXNvdXJjZScsICckcScsIEZvb1NlcnZpY2VdKTtcbiIsIlxuXG5jbGFzcyBIZWxsb1dvcmxkQ29udHJvbGxlciB7XG4gIHB1YmxpYyBuYW1lIDogU3RyaW5nID0gJ1dvcmxkISdcbiAgY29uc3RydWN0b3IoJHNjb3BlOiBuZy5JU2NvcGUpIHtcbiAgICAkc2NvcGUubmFtZSA9IHRoaXMubmFtZTtcbiAgfVxufVxuXG5hbmd1bGFyLlxuICBtb2R1bGUoJ2NvbXBvbmVudHMnLCBbXSkuXG4gIGNvbXBvbmVudCgnaGVsbG9Xb3JsZCcsIHtcbiAgICB0ZW1wbGF0ZTogYDxoMT5IZWxsbywge3tuYW1lfX08L2gxPmAsXG4gICAgY29udHJvbGxlcjogSGVsbG9Xb3JsZENvbnRyb2xsZXJcbiAgfSk7Il19