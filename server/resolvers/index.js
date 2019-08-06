// const { userResolvers } = require('./user');
// const { messageResolvers } = require('./message');
// const resolvers = [userResolvers, messageResolvers];

const resolvers = {
    Query: {
        users: async (parent, {rollno}, { User }) => {
            console.log(rollno)
            const users = await User.find({rollno});
            return users
            // return users.map((user) => {
            //     user._id = user._id.toString();
            //     return user;
            // });
        },
        user: async (parent, args, { User }) => {
            const user = await User.findById(args.id);
            if (user) return user;
            else throw new Error('No book with this ID found');
        }
    },
    Mutation: {
        insertUser: async (parent, args, { User }) => {
            const user = await User(args).save();
            user._id = user._id.toString();
            return user;
        }
    }
}

module.exports = { resolvers }