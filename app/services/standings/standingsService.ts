import * as angular from 'angular';
import { LeagueStanding } from '../../models/standings/leagueStanding';
import { ApolloService } from '../apollo/apolloService';
import gql from 'graphql-tag';

export class StandingsService {
  private _$q_;
  constructor($q: any, private apolloService: ApolloService) {
    this._$q_ = $q;
  }

  public getStandings(): ng.IPromise<{}> {
    const deferred = this._$q_.defer();

    const query = gql`
      query {
        standings {
          teams {
            name,
            wins,
            losses,
            winningPercentage
          }
        }
      }
    `;

    deferred.resolve(this.apolloService.query(query).then(r => {
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

    return deferred.promise;
 
    /*
    return this.apolloService.query('').then(result => {
      return result.data['standings'] as LeagueStanding[];
    });
    */
  }
}

angular
  .module('services')
  .service('StandingsService', ['$q', 'ApolloService', StandingsService]);