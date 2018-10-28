import { buildSchema } from 'graphql';

export const userSchema = buildSchema(`
  type User {
    id: ID!,
    name: String!
  }

  type Query {
    users: [User],
    user(id: Int): User
  }
`);