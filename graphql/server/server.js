import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';
import { buildSchema } from 'graphql';
import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  mergeSchemas,
} from 'graphql-tools';

import { userSchema } from './graphql/users/userSchema'
import { standingsSchema } from './graphql/mlb-standings/standingsSchema'

const app = express();
const dev = process.env.NODE_ENV === 'development';

app.use(cors());

var q = buildSchema(`
  type Bar {
    id: ID!,
    name: String!
  }
  type Query {
    bars: [Bar],
  }
`)

var m = mergeSchemas({
  schemas: [userSchema, q, standingsSchema],
  resolvers: {
    Query: {
      users: () => {
        return [{id: 1, name: 'foo' }]
      },
      standings: () => {
        return [{
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
        }];
      }
    }
  }
});

app.use('/graphql', graphqlHTTP({
  schema: m,
  // rootValue: resolvers,
  graphiql: true
}));

app.use('/', (req, res) => {
  res.json('Go to /graphql to test your queries and mutations!');
});

const server = app.listen(3004, () => {
  const { port } = server.address();
  console.info(`\n\nExpress listen at http://localhost:${port} \n`);
});
