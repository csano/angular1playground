import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
} from 'graphql';

const StandingsType = new GraphQLObjectType({
  name: 'StandingsType',
  description: 'Standings type definition',
  fields: () => ({
    league: {
      type: new GraphQLNonNull(GraphQLString),
    },
    teams: {
      type: new GraphQLList(TeamStandingsType),
    },
  }),
});

const TeamStandingsType = new GraphQLObjectType({
  name: 'TeamStandingsType',
  description: '',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    wins: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    losses: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    winningPercentage: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    gamesBack: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    lastTen: {
      type: new GraphQLNonNull(GraphQLString)
    },
    streak: {
      type: new GraphQLNonNull(GraphQLString)
    },
    runsScored: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    runsAllowed: {
      type: new GraphQLNonNull(GraphQLInt),
    }
 
  })
});

export {
  StandingsType,
  TeamStandingsType
};
