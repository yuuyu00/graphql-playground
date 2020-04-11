import { GQLNoteResolvers } from '../../types/schemaTypes'
import { userFixture } from '../../fixtures'

export const Note: GQLNoteResolvers = {
  author: parent =>
    userFixture.find(user => user.id === parent.userId) || {
      id: '0',
      name: 'unknown',
      age: 0,
    },
}
