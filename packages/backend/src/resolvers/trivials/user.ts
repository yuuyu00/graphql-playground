import { GQLUserResolvers } from '../../types/schemaTypes'
import { noteFixture } from '../../fixtures'

export const User: GQLUserResolvers = {
  notes: parent => noteFixture.filter(note => note.userId === parent.id),
}
