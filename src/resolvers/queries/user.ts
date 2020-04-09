import { GQLQueryResolvers } from "../../types/schemaTypes";
import { userFixture } from "../../fixtures";

export const user: GQLQueryResolvers["user"] = async (_, { id }) => {
  return userFixture.find((user) => user.id === id) || null;
};

export const users: GQLQueryResolvers["users"] = async (_, { first }) =>
  first ? userFixture.slice(first - 1) : userFixture;
