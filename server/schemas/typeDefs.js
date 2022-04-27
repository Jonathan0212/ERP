const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Location {
    location: String
    inventory: [Inventory]
  }
  type Inventory {
    inventoryQty: Int
    category: [Category]
  }
  type Category {
    categoryType: String
    categoryQty: Int
    unitQty: Int
    unitType: String
  }
  
  type Query {
    users: [User]
    user(username: String!): User
    location(username: String): [Location]
    inventory: [Inventory]
  }
`;


  module.exports = typeDefs;
