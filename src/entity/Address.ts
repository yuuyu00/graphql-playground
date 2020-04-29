import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm'
import { User } from './User'

@Entity('Address')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @OneToOne(
    () => User,
    user => user.address,
  )
  @JoinColumn()
  user!: User

  constructor(args?: AddressConstructorArgs) {
    if (!args) return this

    if (args.id) this.id = args.id
    this.user = args.user
    this.name = args.name
  }
}

export type AddressConstructorArgs = {
  id?: string
  user: User
  name: string
}
