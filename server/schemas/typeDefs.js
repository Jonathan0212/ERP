const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Location {
    _id: ID
    location: String
    inventory: [Inventory]
  }
  type Inventory {
    _id: ID
    inventoryQty: Int
    category: [Category]
  }
  type Category {
    _id: ID
    categoryType: String
    categoryQty: Int
    unitQty: Int
    unitType: String
  }
  
  type Query {
    me: User
    users: [User]
    user(username: String!): User   # Change to Auth to allow JWTs
    locations(username: String): [Location]
    location(_id: ID!): Location
    inventory: [Inventory]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;


  module.exports = typeDefs;
