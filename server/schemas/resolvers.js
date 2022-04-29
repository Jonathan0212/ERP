// Insert models into curly braces below
const { AuthenticationError } = require('apollo-server-express');
const { Category, Inventory, Location, User } = require('../models');

const resolvers = {
  // Queries and mutations go here
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        // ADD BACK IF VIRTUALS ARE USED
        //.populate('thoughts')
        //.populate('friends');
    },
    user: async (parent, { username }) => {
      console.log(username)
      return User.findOne({ username })
        .select('-__v -password')
        //.populate('friends')
        //.populate('thoughts');
    },
  }
};








module.exports = resolvers;
