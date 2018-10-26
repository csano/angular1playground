import * as angular from 'angular';
import { StandingsService } from '../../services/standings/standingsService';

class MlbStandingsController {
  public standings;
  constructor($scope: any, standingsService: StandingsService) {
    standingsService.getStandings().then((r) => {
      $scope.standings = r;
    });
  }

}

angular
  .module('myApp')
  .component('mlbStandings', {
    bindings: {
      standings: '='
    },
    templateUrl: './components/mlb-standings/mlb-standings.html',
    controller: ['$scope', 'StandingsService', MlbStandingsController]
  });