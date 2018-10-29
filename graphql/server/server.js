import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import { mergeSchemas } from 'graphql-tools';
import { userSchema } from './graphql/users/userSchema'
import { standingsSchema } from './graphql/mlb-standings/standingsSchema'

const fetch = require('node-fetch');

const app = express();

app.use(cors());
console.log('test');

const schema = mergeSchemas({
  schemas: [userSchema, standingsSchema],
  resolvers: {
    Query: {
      users: () => {
        return [{id: 1, name: 'foo' }]
      },
      standings: () => {
        return fetch('http://localhost:3120/api/mlb/standings').then(x => { return x.json(); }); 
      }
    }
  }
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
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
