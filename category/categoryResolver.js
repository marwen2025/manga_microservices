const db = require('./models');

// Implementation of category resolvers
const categoryResolver = {
  category: ({ id }) => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM categories WHERE id = ?`, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  },
  categories: () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM categories`, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },
  addCategory: ({ name }) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO categories (name) VALUES (?)`, [name], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, name });
        }
      });
    });
  },
  updateCategory: ({ id, name }) => {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE categories SET name = ? WHERE id = ?`, [name, id], function (err) {
        if (err) {
          reject(err);
        } else if (this.changes === 0) {
          reject(new Error('Category not found.'));
        } else {
          resolve({ id, name });
        }
      });
    });
  },
  deleteCategory: ({ id }) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM categories WHERE id = ?`, [id], function (err) {
        if (err) {
          reject(err);
        } else if (this.changes === 0) {
          reject(new Error('Category not found.'));
        } else {
          resolve({ id });
        }
      });
    });
  },
};

module.exports = categoryResolver;
