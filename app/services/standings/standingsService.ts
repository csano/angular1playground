import * as angular from 'angular';
import { LeagueStanding } from '../../models/standings/leagueStanding';
import { ApolloService } from '../apollo/apolloService';
import gql from 'graphql-tag';
import { valueFromAST } from '../../../node_modules/@types/graphql';

export class StandingsService {
  private _$q_;
  constructor($q: any, private apolloService: ApolloService) {
    this._$q_ = $q;
  }

  public getStandings(): ng.IPromise<{}> {

    const query = gql`
      query {
        standings {
          name,
          teams {
            team {
              name
            },
            wins,
            losses,
            winningPercentage,
            gamesBack
          }
        }
      }
    `;

    const deferred = this._$q_.defer();

    this.apolloService.query(query).then(r => {
      const standings = r.data['standings'] as LeagueStanding[];
      const leagues = [];
      for (const ls of standings) {
        const teams = [];
        for (const team of ls.teams) {
          teams.push({
            team: {
              name: team.team.name
            },
            wins: team.wins,
            losses: team.losses,
            winningPercentage: team.winningPercentage,
            gamesBack: team.gamesBack
          });
        }
        leagues.push({
          name: ls.name,
          teams: teams
        });
      }
      deferred.resolve(leagues);
    });

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