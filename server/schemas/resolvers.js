// Insert models into curly braces below
const { Category, Inventory, Location, User } = require('../models');

const resolvers = {
  // Queries and mutations go here
  Query: {
    users: async () => {
      return User.find()
        .select('-__v -password')
        // ADD BACK IF VIRTUALS ARE USED
        //.populate('thoughts')
        //.populate('friends');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        //.populate('friends')
        //.populate('thoughts');
    },
  }
};








module.exports = resolvers;
