import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('User')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Column()
  age!: number

  constructor(args?: UserConstructorArgs) {
    if (!args) return this

    if (args.id) this.id = args.id
    this.name = args.name
    this.age = args.age
  }
}

export type UserConstructorArgs = {
  id?: string
  name: string
  age: number
}
