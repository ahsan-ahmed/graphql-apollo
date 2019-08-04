const { userResolvers } = require('./user');
const { messageResolvers } = require('./message');

const resolvers = [userResolvers, messageResolvers];
module.exports = { resolvers }