// mangaSchema.js
const { buildSchema } = require('graphql');
// Créer un schéma GraphQL
const mangaSchema = buildSchema(`
type Query {
manga(id: Int!): Manga
mangas: [Manga]
}
type Mutation {
addManga(name: String!, categoryId: Int!, author: String!): Manga
}
type Manga {
id: Int
name: String
categoryId: Int
author: String
}
`);
module.exports = mangaSchema;