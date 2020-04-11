import { GQLResolvers } from '../types/schemaTypes'
import { IResolvers } from 'apollo-server-express'
import { note, notes, user, users } from './queries'
import { createUser } from './mutations'
import { Note, User } from './trivials'

export const resolvers = {
  Query: {
    note,
    notes,
    user,
    users,
  },
  Mutation: {
    createUser,
  },
  Note,
  User,
} as IResolvers<any, any> & GQLResolvers
