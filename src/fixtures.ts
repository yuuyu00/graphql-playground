import { Note, User } from './types/model'

export const noteFixture: Note[] = [
  { id: '1', content: 'first note', userId: '1' },
  { id: '2', content: 'second note', userId: '3' },
  { id: '3', content: 'third note', userId: '2' },
]

export const userFixture: User[] = [
  { id: '1', name: 'Steve Rogers', age: 25 },
  { id: '2', name: 'Tony Stark', age: 40 },
  { id: '3', name: 'Natasha Romanoff', age: 30 },
]
