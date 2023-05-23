const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données
let db = new sqlite3.Database('./../database.db', (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log('Base de données connectée.');
});

// Création de la table "categories"
db.run(`CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE
)`);

// Modèle de données pour représenter une catégorie
class Category {
  constructor(name) {
    this.name = name;
  }

  // Enregistrer une nouvelle catégorie dans la base de données
  save(callback) {
    db.run(`INSERT INTO categories (name) VALUES (?)`, [this.name], function (err) {
      if (err) {
        console.error(err.message);
        return callback(err);
      }
      console.log(`Catégorie ${this.name} ajoutée avec l'ID ${this.lastID}`);
      callback(null, this.lastID);
    });
  }

  // Rechercher toutes les catégories dans la base de données
  static findAll(callback) {
    db.all(`SELECT * FROM categories`, [], function (err, rows) {
      if (err) {
        console.error(err.message);
        return callback(err);
      }
      const categories = rows.map(row => new Category(row.name));
      callback(null, categories);
    });
  }

  // Rechercher une catégorie par ID dans la base de données
  static findById(id, callback) {
    db.get(`SELECT * FROM categories WHERE id = ?`, [id], function (err, row) {
      if (err) {
        console.error(err.message);
        return callback(err);
      }
      if (!row) {
        return callback(new Error('Catégorie non trouvée'));
      }
      const category = new Category(row.name);
      callback(null, category);
    });
  }

  // Mettre à jour une catégorie dans la base de données
  static updateById(id, name, callback) {
    db.run(`UPDATE categories SET name = ? WHERE id = ?`, [name, id], function (err) {
      if (err) {
        console.error(err.message);
        return callback(err);
      }
      console.log(`Catégorie avec l'ID ${id} mise à jour.`);
      callback(null);
    });
  }

  // Supprimer une catégorie de la base de données
  static deleteById(id, callback) {
    db.run(`DELETE FROM categories WHERE id = ?`, [id], function (err) {
      if (err) {
        console.error(err.message);
        return callback(err);
      }
      console.log(`Catégorie avec l'ID ${id} supprimée.`);
      callback(null);
    });
  }
}

module.exports = db;
