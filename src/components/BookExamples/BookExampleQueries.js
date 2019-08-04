/////////////////////////////////QUERIES///////////////////////////////////////////

////////////////////////////
////////////One Example//////////////
/////////////////////////////////
//first schema query//
// const schema = gql`
// type Query {
// me: User
// }
// type User {
// username: String!
// }
// `;
//End//
//second schema query//
// const schema = gql`
// type Query {
// me: User
// user(id: ID!): User
// }
// type User {
// id: ID!
// username: String!
// }
// `;
//End//
// const resolvers = {
//     Query: {
//         user: (parent, { id }) => {
//             return users[id];
//         },
//         me: () => {
//             return me;
//         },
//     },
// };
//End//
// const resolvers = {
//     Query: {
//         me: () => {
//             return {
//                 username: 'Robin Wieruch',
//             };
//         },
//         user: (parent, args) => {
//             return {
//                 username: 'Dave Davids',
//             };
//         },
//     },
// };
//End//

// const resolvers = {
//     Query: {
//         users: () => {
//             return Object.values(users);
//         },
//         user: (parent, { id }) => {
//             return users[id];
//         },
//         me: () => {
//             return me;
//         },
//     },
// };

// let users = {
//     1: {
//         id: '1',
//         username: 'Robin Wieruch',
//     },
//     2: {
//         id: '2',
//         username: 'Dave Davids',
//     },
// };


// //Important Schema//
// const schema = gql`
// type Query {
// users: [User!]
// user(id: ID!): User
// me: User
// }
// type User {
// id: ID!
// username: String!
// }
// `;

// //Resolver first arguement Parent//
// const resolvers = {
//     Query: {
//         users: () => {
//             return Object.values(users);
//         },
//         user: (parent, { id }) => {
//             return users[id];
//         },
//         me: (parent, args, { me }) => {
//             return me;
//         },
//     },
//     User: {
//         //user=parent
//         username: user => {
//             console.log(user)
//             return user.username;
//         }
//     },
// };
// //End//

////////////////////////////
////////////Second Example//////////////
/////////////////////////////////

// const schema = gql`
// type Query {
// users: [User!]
// user(id: ID!): User
// me: User
// messages: [Message!]!
// message(id: ID!): Message!
// }
// type User {
// id: ID!
// username: String!
// messages:[Message!]
// }
// type Message {
//     id: ID!
//     text: String!
//     user: User!
// }`;

// let users = {
//     1: {
//         id: '1',
//         username: 'Robin Wieruch',
//     },
//     2: {
//         id: '2',
//         username: 'Dave Davids',
//     },
// };
// let messages = {
//     1: {
//         id: '1',
//         text: 'Hello World',
//         userId: "1"
//     },
//     2: {
//         id: '2',
//         text: 'By World',
//         userId: "2"
//     },
// }

// const resolvers = {
//     Query: {
//         users: () => {
//             return Object.values(users);
//         },
//         user: (parent, { id }) => {
//             return users[id];
//         },
//         me: (parent, args, { me }) => {
//             return me;
//         },
//         messages: () => {
//             return Object.values(messages);
//         },
//         message: (parent, { id }) => {
//             return messages[id];
//         },
//     },
//     User: {
//         messages: user => {
//             return Object.values(messages).filter(
//                 message => message.userId === user.id,
//             );
//         },
//     },
//     Message: {
//         user: (message) => {
//             return users[message.userId];
//         },
//     },
// };
