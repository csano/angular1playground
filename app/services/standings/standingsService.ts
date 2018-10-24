import * as angular from 'angular';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { LeagueStanding } from '../../models/standings/leagueStanding';
import { ApolloService } from '../apollo/apolloService';
import { resultKeyNameFromField } from '../../../node_modules/apollo-client/data/storeUtils';


export class StandingsService {
  private _$q_;
  constructor($http: any, $q: any, private apolloService: ApolloService) {
    this._$q_ = $q;
  }

  public getStandings(): any {
    const deferred = this._$q_.defer();

    const as = this.apolloService;
    deferred.resolve(as.query('').then(r => {
      const standings = r.data['standings'] as LeagueStanding[];
      const out = [];
      for (const ls of standings) {
        const teams = [];
        for (const team of ls.teams) {
          teams.push({
            name: team.name,
            wins: team.wins,
            losses: team.losses,
            winningPercentage: team.winningPercentage
          });
        }
        out.push({
          name: ls.name,
          teams: teams
        });
      }
      return out;
    }));
     /*
      deferred.resolve([{
        name: 'foobar',
        teams: [{
          name: 'test',
          wins: 1,
          losses: 0,
          winningPercentage: 1.000
        }]
      }]);
      */

    return deferred.promise;
 
    console.log('getStandings');
    return this.apolloService.query('').then(result => {
      return result.data['standings'] as LeagueStanding[];
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
  .service('StandingsService', ['$http', '$q', 'ApolloService', StandingsService]);