import { GQLResolvers } from "../types/schemaTypes";
import { IResolvers } from "apollo-server-express";

export const resolvers: IResolvers<any, any> & GQLResolvers = {
  Query: {
    foo: () => "foo",
  },
  Mutation: {
    bar: () => "bar",
  },
};
