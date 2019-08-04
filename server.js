const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require("cors");

const { schema } = require('./src/schema');
const { resolvers } = require('./src/resolvers');
const { models } = require('./src/models');

const app = express();

app.use(cors());

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        models,
        me: models.users[1],
    },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});
