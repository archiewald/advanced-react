import { GraphQLServer } from "graphql-yoga";
import { Query } from "./resolvers/Query";
import { Mutation } from "./resolvers/Mutation";
import { db } from "./db";

// Crate the GraphQL Yoga Server

export function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}
