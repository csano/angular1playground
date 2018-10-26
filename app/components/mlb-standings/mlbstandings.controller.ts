import * as angular from 'angular';
import { StandingsService } from '../../services/standings/standingsService';

class MlbStandingsController {
  public standings;
  constructor($scope: any, standingsService: StandingsService) {
    $scope.standings = standingsService.getStandings().then((r) => {
      console.log(r);
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