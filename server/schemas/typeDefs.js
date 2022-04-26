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

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
`;


  module.exports = typeDefs;
