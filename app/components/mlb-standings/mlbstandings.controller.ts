import * as angular from 'angular';
import { StandingsService } from '../../services/standings/standingsService';

class MlbStandingsController {
  public standings;
  constructor(standingsService: StandingsService) {
    this.standings = standingsService.getStandings();
    console.log(this.standings);
  }
}

angular
  .module('myApp')
  .component('mlbStandings', {
    templateUrl: './components/mlb-standings/mlb-standings.html',
    controller: ['StandingsService', MlbStandingsController]
  });