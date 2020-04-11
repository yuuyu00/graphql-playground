import express from 'express'
import 'reflect-metadata'
import { ApolloServer, gql } from 'apollo-server-express'
import { readFileSync } from 'fs'
import { createConnection } from 'typeorm'

import { resolvers } from './resolvers'
import { context } from './resolvers/context'

createConnection()

const schemaStr = readFileSync('src/schema/dist/schema.gql', 'utf8')
console.log(schemaStr)
const typeDefs = gql`
  ${schemaStr}
`
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  debug: process.env.NODE_ENV === 'development',
})

const app = express()
app.disable('x-powerd-by')
server.applyMiddleware({ app })

const PORT = 3000
app.listen(PORT, () => {
  console.log(`GraphQL server ready at localhost:${PORT}/graphql`)
})
