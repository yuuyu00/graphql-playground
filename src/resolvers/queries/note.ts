import { GQLQueryResolvers } from "../../types/schemaTypes";
import { noteFixture } from "../../fixtures";

export const note: GQLQueryResolvers["note"] = async (_, { id }) => {
  return noteFixture.find((note) => note.id === id) || null;
};

export const notes: GQLQueryResolvers["notes"] = async (_, { first }) =>
  first ? noteFixture.slice(first - 1) : noteFixture;
