// mangaResolver.js
const db = require('./models');
// Implémentation des résolveurs GraphQL
const mangaResolver = {
    manga: ({ id }) => {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM mangas WHERE id = ?`, [id], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    },
    mangas: () => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM mangas`, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },
    addManga: ({ name, categoryId, author }) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO mangas (name, categoryId, author) VALUES (?, ?, ?)`,
                [name, categoryId, author], function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ id: this.lastID, name, categoryId, author });
                    }
                });
        });
    },
    updateManga: ({ id, name, categoryId, author }) => {
        return new Promise((resolve, reject) => {
            db.run(
                `UPDATE mangas SET name = ?, categoryId = ?, author = ? WHERE id = ?`,
                [name, categoryId, author, id],
                function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        if (this.changes === 0) {
                            reject(new Error('Manga not found'));
                        } else {
                            resolve({ id, name, categoryId, author });
                        }
                    }
                }
            );
        });
    },

    deleteManga: ({ id }) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM mangas WHERE id = ?`, [id], function (err) {
                if (err) {
                    reject(err);
                } else {
                    if (this.changes === 0) {
                        reject(new Error('Manga not found'));
                    } else {
                        resolve({ id });
                    }
                }
            });
        });
    }
};
module.exports = mangaResolver;