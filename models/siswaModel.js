const db = require('../db/config');

const Siswa = {
    getAll: (callback) => {
        db.query('SELECT * FROM siswa', callback);
    },
    getById: (userId, callback) => {
        db.query('SELECT * FROM siswa WHERE user_id = ? LIMIT 1', [userId], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO siswa SET ?', data, callback);
    },
    update: (userId, data, callback) => {
        db.query('UPDATE siswa SET ? WHERE user_id = ?', [data, userId], callback);
    },
    delete: (userId, callback) => {
        db.query('DELETE FROM siswa WHERE user_id = ?', [userId], callback);
    }
};

module.exports = Siswa;
