const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require("./resolvers")
// const db = require("./db")

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
})
server.start();
