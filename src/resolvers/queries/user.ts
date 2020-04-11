import { getCustomRepository } from 'typeorm'
import { GQLQueryResolvers } from '../../types/schemaTypes'
import { UserRepository } from '../../repository/User'

export const user: GQLQueryResolvers['user'] = async (_, { id }) => {
  return getCustomRepository(UserRepository).findOneOrFail({ id })
}

export const users: GQLQueryResolvers['users'] = async (_, { first }) =>
  first
    ? getCustomRepository(UserRepository).find({ take: first })
    : getCustomRepository(UserRepository).find()
