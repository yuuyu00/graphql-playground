import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm'
import { Address } from './Address'

@Entity('User')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Column()
  age!: number

  @OneToOne(
    () => Address,
    address => address.user,
  )
  @JoinColumn()
  address?: Address

  constructor(args?: UserConstructorArgs) {
    if (!args) return this

    if (args.id) this.id = args.id
    if (args.address) this.address = args.address
    this.name = args.name
    this.age = args.age
  }
}

export type UserConstructorArgs = {
  id?: string
  address?: Address
  name: string
  age: number
}
