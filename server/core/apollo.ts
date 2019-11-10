import { ApolloServer } from 'apollo-server-express'

import typeDefs from '../graphql/typeDefs'
import resolvers from '../graphql/resolvers'

const { PORT = 3000 } = process.env

const playground = {
  endpoint: `http://localhost:${PORT}/graphql`,
}

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  playground,
})

export default apollo
