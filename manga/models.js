const sqlite3 = require('sqlite3').verbose();
// Connexion la base de données
let db = new sqlite3.Database('./../database.db', (err) => {
if (err) {
console.error(err.message);
throw err;
}
console.log('Base de données connectée.');
});
// Création de la table "mangas"
db.run(`CREATE TABLE IF NOT EXISTS mangas (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL UNIQUE,
categoryId TEXT NOT NULL ,
author TEXT NOT NULL,
FOREIGN KEY (categoryId) REFERENCES categories(id)
)`);
// Modèle de données pour représenter un utilisateur
class Manga {
constructor(name, categoryId, author) {
this.name = name;
this.categoryId = categoryId;
this.author = author;
}
// Enregistrer un nouvel utilisateur dans la base de données
save(callback) {
db.run(`INSERT INTO mangas (name, categoryId, author) VALUES (?, ?, ?)`,
[this.name, this.categoryId, this.author], function(err) {
if (err) {
console.error(err.message);
return callback(err);
}
console.log(`Utilisateur ${this.name} ajouté avec l'ID ${this.lastID}`);
callback(null, this.lastID);
});
}
// Rechercher tous les utilisateurs dans la base de données
static findAll(callback) {
db.all(`SELECT * FROM mangas`, [], function(err, rows) {
if (err) {
console.error(err.message);
return callback(err);
}
const mangas = rows.map(row => new User(row.name, row.categoryId,
row.author));
callback(null, mangas);
});
}
// Rechercher un utilisateur par ID dans la base de données
static findById(id, callback) {
    db.get(`SELECT * FROM mangas WHERE id = ?`, [id], function(err, row) {
    if (err) {
    console.error(err.message);
    return callback(err);
    }
    if (!row) {
    return callback(new Error('Utilisateur non trouvé'));
    }
    const user = new User(row.name, row.categoryId, row.author);
    callback(null, user);
    });
    }
    // Mettre à jour un utilisateur dans la base de données
    static updateById(id, name, categoryId, author, callback) {
    db.run(`UPDATE mangas SET name = ?, category = ?, author = ? WHERE id = ?`,
    [name, categoryId, author, id], function(err) {
    if (err) {
    console.error(err.message);
    return callback(err);
    }
    console.log(`Utilisateur avec l'ID ${id} mis à jour.`);
    callback(null);
    });
    }
    // Supprimer un utilisateur de la base de données
    static deleteById(id, callback) {
    db.run(`DELETE FROM mangas WHERE id = ?`, [id], function(err) {
    if (err) {
    console.error(err.message);
    return callback(err);
    }
    console.log(`Utilisateur avec l'ID ${id} supprimé.`);
    callback(null);
    });
    }
    }
    module.exports = db;