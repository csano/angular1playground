import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import {
  userQueries,
  userMutations,
} from './users/users';

import {
  standingsQueries
} from './mlb-standings/standings';


export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...userQueries,
      ...standingsQueries
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...userMutations,
    }),
  }),
});
