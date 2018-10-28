import { buildSchema } from 'graphql';

export const standingsSchema = buildSchema(`
  type Team {
    id: ID!,
    name: String!
  }

  type Standings {
    name: String!,
    teams: [TeamStandings]
  }

  type TeamStandings {
    team: Team!,
    wins: Int!,
    losses: Int!,
    winningPercentage: Int!,
    gamesBack: Float!,
    lastTen: String!,
    streak: String!,
    runsScored: Int!,
    runsAllowed: Int!
  }

  type Query {
    standings: [Standings]
  }
`);