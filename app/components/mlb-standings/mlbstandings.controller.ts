import * as angular from 'angular';
import { StandingsService } from '../../services/standings/standingsService';
import { LeagueStanding } from '../../models/standings/leagueStanding';
import { TeamStanding } from '../../models/standings/teamStanding';

class MlbStandingsController {
  public standings;
  private _$q_;
  private _standingsService_;
  constructor($scope: any, $q: any, standingsService: StandingsService) {
    this._$q_ = $q;

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
    controller: ['$scope', '$q', 'StandingsService', MlbStandingsController]
  });