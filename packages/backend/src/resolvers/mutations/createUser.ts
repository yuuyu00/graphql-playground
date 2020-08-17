import { getCustomRepository } from 'typeorm'
import { GQLMutationResolvers } from '../../types/schemaTypes'
import { UserRepository } from '../../repository/User'
import { User } from '../../entity/User'

export const createUser: GQLMutationResolvers['createUser'] = async (
  _,
  { input: { age, name } },
) => {
  const user = await getCustomRepository(UserRepository).save(
    new User({ name, age }),
  )
  return user
}
