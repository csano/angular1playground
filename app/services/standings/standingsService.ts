import * as angular from 'angular';

export class StandingsService {
  public StandingsService($http: any) {
    console.log($http);
  }

}

angular
  .module('services', [])
  .service('StandingsService', ['$http', StandingsService]);