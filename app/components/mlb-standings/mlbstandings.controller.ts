import * as angular from 'angular';
import { StandingsService } from '../../services/standings/standingsService';

class MlbStandingsController {
  public standings;
  constructor($scope: any, standingsService: StandingsService) {
    console.log('scope: ' + $scope);
    standingsService.getStandings().then(result => {
      $scope.standings = result;
    });
  }
}

angular
  .module('myApp')
  .component('mlbStandings', {
    templateUrl: './components/mlb-standings/mlb-standings.html',
    controller: ['$scope', 'StandingsService', MlbStandingsController]
  });