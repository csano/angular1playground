import { GraphQLList, GraphQLNonNull, GraphQlInt, GraphQLID} from 'graphql';

import {
  StandingsType,
} from './standingsTypes'

const standingsQueries = {
  standings: {
    type: new GraphQLList(StandingsType),
    resolve: async () => {
      return await new Promise(x => {
        x([{
          name: 'AL East',
          teams: [
            {
              team: {
                id: 1,
                name: 'Boston Red Sox'
              },
              wins: 0,
              losses: 0,
              winningPercentage: 0,
              gamesBack: 0,
              lastTen: '',
              streak: '',
              runsScored: 0,
              runsAllowed: 0
            },
            {
              team: {
                id: 1,
                name: 'New York Yankees',
              },
              wins: 0,
              losses: 0,
              winningPercentage: 0,
              gamesBack: 0,
              lastTen: '',
              streak: '',
              runsScored: 0,
              runsAllowed: 0
            },
            {
              team: {
                id: 1,
                name: 'Tampa Bay Rays',
              },
              wins: 0,
              losses: 0,
              winningPercentage: 0,
              gamesBack: 0,
              lastTen: '',
              streak: '',
              runsScored: 0,
              runsAllowed: 0
            },
            {
              team: {
                id: 1,
                name: 'Toronto Blue Jays',
              },
              wins: 0,
              losses: 0,
              winningPercentage: 0,
              gamesBack: 0,
              lastTen: '',
              streak: '',
              runsScored: 0,
              runsAllowed: 0
            },
            {
              team: {
                id: 1,
                name: 'Baltimore Orioles',
              },
              wins: 0,
              losses: 0,
              winningPercentage: 0,
              gamesBack: 0,
              lastTen: '',
              streak: '',
              runsScored: 0,
              runsAllowed: 0
            },
          ]
        }, {
          name: 'AL Central',
          teams: [{
            team: {
              id: 1,
              name: 'Cleveland Indians',
            },
            wins: 0,
            losses: 0,
            winningPercentage: 0,
            gamesBack: 0,
            lastTen: '',
            streak: '',
            runsScored: 0,
            runsAllowed: 0
          },
          {
            team: {
              id: 1,
              name: 'Kansas City Royals',
            },
            wins: 0,
            losses: 0,
            winningPercentage: 0,
            gamesBack: 0,
            lastTen: '',
            streak: '',
            runsScored: 0,
            runsAllowed: 0
          },
          {
            team: {
              id: 1,
              name: 'Minnesota Twins',
            },
            wins: 0,
            losses: 0,
            winningPercentage: 0,
            gamesBack: 0,
            lastTen: '',
            streak: '',
            runsScored: 0,
            runsAllowed: 0
          }]
        }])
      });
    }
  }
}

export {
  standingsQueries
}