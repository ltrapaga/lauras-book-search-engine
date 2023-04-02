const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define what can be queried for each user
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }
  # Define what can be queried for each book
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  input InputBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }
  type Query {
    # Context functionality allows us to check a JWT and decode its data
    # Query will always find and return the logged in user's data
    me: User
  }
  # Define which mutations the client is allowed to make
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;