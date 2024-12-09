const db = require('../db/config');

const User = {
    findByUsername: (username, callback) => {
        db.query('SELECT * FROM users WHERE username = ?', [username], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO users SET ?', data, callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM users WHERE id = ?', [id], callback);
    },
    changePassword : (id, password, callback) => {
        db.query("UPDATE users SET password = ? where id = ? ", [password, id], callback);
    }
 
};

module.exports = User;
