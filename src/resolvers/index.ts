import { GQLResolvers } from '../types/schemaTypes'
import { IResolvers } from 'apollo-server-express'
import { note, notes, user, users } from './queries'
import { Note, User } from './trivials'

export const resolvers = {
  Query: {
    note,
    notes,
    user,
    users,
  },
  Mutation: {},
  Note,
  User,
} as IResolvers<any, any> & GQLResolvers
