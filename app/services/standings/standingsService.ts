import * as angular from 'angular';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { LeagueStanding } from '../../models/standings/leagueStanding';
import { ApolloService } from '../apollo/apolloService';


export class StandingsService {
  constructor($http: any, private apolloService: ApolloService) {
    console.log(apolloService);
  }

  public getStandings(): Promise<LeagueStanding[]> {
    return this.apolloService.query('').then(result => {
      return result.data as LeagueStanding[];
    });
    /*
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
    */
  }
}

angular
  .module('services')
  .service('StandingsService', ['$http', 'ApolloService', StandingsService]);