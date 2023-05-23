const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const db = require('./models');
const mangaSchema = require('./mangaSchema');
const mangaResolver = require('./mangaResolver');
const app = express();
const port = 5000;

// Utilisation de GraphQL pour gérer les requêtes
app.use('/graphql', graphqlHTTP({
  schema: mangaSchema,
  rootValue: mangaResolver,
  graphiql: true
}));

// Utilisation de body-parser pour analyser les demandes HTTP
app.use(bodyParser.urlencoded({ extended: true }));

// Implémentation de l'API REST

// Read (GET): Get all mangas
app.get('/s1/mangas', (req, res) => {
  db.all(`SELECT * FROM mangas`, [], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json(rows);
  });
});

// Read (GET): Get a manga by ID
app.get('/s1/manga/:id', (req, res) => {
  db.get(`SELECT * FROM mangas WHERE id = ?`, [req.params.id], (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json(row);
  });
});

// Create (POST): Add a new manga
app.post('/s1/manga', (req, res) => {
  const { name, categoryId, author } = req.body;
  db.run(`INSERT INTO mangas (name, categoryId, author) VALUES (?, ?, ?)`, [name, categoryId, author], (err) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ "message": "success" });
  });
});

// Update (PUT): Update a manga by ID
app.put('/s1/manga/:id', (req, res) => {
  const { name, categoryId, author } = req.body;
  db.run(`UPDATE mangas SET name = ?, categoryId = ?, author = ? WHERE id = ?`, [name, categoryId, author, req.params.id], (err) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ "message": "success" });
  });
});

// Delete (DELETE): Delete a manga by ID
app.delete('/s1/manga/:id', (req, res) => {
  db.run(`DELETE FROM mangas WHERE id = ?`, [req.params.id], (err) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ "message": "success" });
  });
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}.`);
});
