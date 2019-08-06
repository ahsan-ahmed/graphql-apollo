const { gql } = require('apollo-server-express');
// const { userSchema } = require('./user');
// const { messageSchema } = require('./message');

// const linkSchema = gql`
// type Query {
// _: Boolean
// }
// type Mutation {
// _: Boolean
// }
// type Subscription {
// _: Boolean
// }
// `;

// const schema = [linkSchema, userSchema, messageSchema];
const schema = gql`
 type Query{
    user(id: ID!): User
    users:[User!]
 }
 type User{
    id: ID!
     firstname:String
     lastname:String
     gpa:String
     rollno:Int
 }
 type Mutation {
    insertUser(
        firstname: String!,
        lastname: String!, 
        gpa:String
        rollno:Int
        ):User!
    }
`;
module.exports = { schema }