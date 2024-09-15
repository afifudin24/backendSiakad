const db = require('../db/config');

const Guru = {
    getAll: (callback) => {
        db.query('SELECT * FROM gurus', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM gurus WHERE user_id = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO gurus SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE gurus SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM gurus WHERE user_id = ?', [id], callback);
    },
    getWalikelas: (callback) => {
        db.query('SELECT wl.id AS walikelas_id, gr.id AS guru_id, gr.nama AS guru_nama, kl.id AS kelas_id, kl.title AS kelas_nama FROM walikelas wl JOIN gurus gr ON wl.guru_id = gr.id JOIN kelas kl ON wl.kelas_id = kl.id', callback);
    },
    createWalikelas: (data, callback) => {
        db.query("INSERT INTO walikelas SET ? ", data, callback);
    }
};

module.exports = Guru;
