import { getCustomRepository } from 'typeorm'
import { GQLQueryResolvers } from '../../types/schemaTypes'
import { UserRepository } from '../../repository/User'

export const user: GQLQueryResolvers['user'] = async (_, { id }) => {
  // https://github.com/typeorm/typeorm/issues/5944
  // このissueを再現できる。リレーション先のエンティティが存在しないなら
  // nullではなくてundefinedを返すべきなんじゃない？なぜならAddressレコードは
  // nullableじゃないから、という問題。
  const userWithNullAddress = await getCustomRepository(UserRepository).findOne(
    {
      where: { id },
      relations: ['address'],
    },
  )
  console.log(
    '--------------------------------------------------------------------------',
  )
  console.log(userWithNullAddress)
  console.log(
    '--------------------------------------------------------------------------',
  )
  return userWithNullAddress!
}

export const users: GQLQueryResolvers['users'] = async (_, { first }) =>
  first
    ? getCustomRepository(UserRepository).find({ take: first })
    : getCustomRepository(UserRepository).find()
