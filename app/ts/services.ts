'use strict';

/* Services */
class PhoneService {
  //static $inject = ['$resource'];
  constructor(private $resource: ng.resource.IResourceService, $q: ng.IQService) { }

  resource = this.$resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
}

var phonecatServices: ng.IModule = angular.module('phonecatServices', ['ngResource']);

var m = angular.module('phonecatServices');

m.service('Phone', ($resource, $q) => {
  return new PhoneService($resource, $q);
});