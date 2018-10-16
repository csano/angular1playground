import * as angular from 'angular';
import { LeagueStanding } from '../../models/standings/leagueStanding';

export class StandingsService {
  public StandingsService($http: any) {
    console.log($http);
  }

  public getStandings(): LeagueStanding[] {
    return [{
      name: 'AL East',
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
          winningPercentage: 0 },
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
        }
      ]
    }];
  }
}

angular
  .module('services', [])
  .service('StandingsService', ['$http', StandingsService]);