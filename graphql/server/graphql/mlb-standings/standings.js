import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import {
  StandingsType,
} from './standingsTypes'

const standingsQueries = {
  standings: {
    type: new GraphQLList(StandingsType),
    resolve: async() => {
      return await new Promise(x => {
        x([{
          league: 'AL East',
          teams: [
            {
              name: 'Boston Red Sox',
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
              name: 'New York Yankees',
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
              name: 'Tampa Bay Rays',
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
              name: 'Toronto Blue Jays',
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
              name: 'Baltimore Orioles',
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
        }])
      });
    }
  }
}

export {
  standingsQueries
}