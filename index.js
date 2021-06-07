const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require("./resolvers")
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ajudaai:ajudaai@firstcluster.2pnam.mongodb.net/FirstCluster?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    pass: 'ajudaai',
    user: 'ajudaai'
})
const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'scheme.graphql'),
    resolvers
})
server.start();
