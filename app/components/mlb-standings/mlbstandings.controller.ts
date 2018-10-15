import * as angular from 'angular';
import { StandingsService } from '../../services/standings/standingsService';


class MlbStandingsController {
  public standings;
  constructor(standingsService: StandingsService) {
    this.standings = {
      league: 'AL East',
      teams: [
        {
          name: 'Boston Red Sox',
          wins: 0,
          losses: 0,
          winningPercentage: 0
        },
        {
          name: 'New York Yankees',
          wins: 0,
          losses: 0,
          winningPercentage: 0
        },
        {
          name: 'Tampa Bay Rays',
          wins: 0,
          losses: 0,
          winningPercentage: 0
        },
        {
          name: 'Toronto Blue Jays',
          wins: 0,
          losses: 0,
          winningPercentage: 0
        },
        {
          name: 'Baltimore Orioles',
          wins: 0,
          losses: 0,
          winningPercentage: 0
        },


      ]
    };

  }
}

angular
  .module('myApp')
  .component('mlbStandings', {
    templateUrl: './components/mlb-standings/mlb-standings.html',
    controller: ['StandingsService', MlbStandingsController]
  });