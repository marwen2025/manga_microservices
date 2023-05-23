const { buildSchema } = require('graphql');

// Create a schema for categories
const categorySchema = buildSchema(`
  type Query {
    category(id: Int!): Category
    categories: [Category]
  }

  type Mutation {
    addCategory(name: String!): Category
  }

  type Category {
    id: Int
    name: String
  }
`);

module.exports = categorySchema;
