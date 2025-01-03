const db = require('../db/config');
const Kelas = {
  getKelas: (callback) => {
    db.query(
      'SELECT kelas.id, kelas.title, kelas.tingkat, adminkelas.kelasId FROM kelas LEFT JOIN adminkelas ON kelas.id = adminkelas.kelasId',
      callback,
    );
  },
  getKelasById: (kelasId, callback) => {
    db.query('SELECT * FROM kelas where id = ?', [kelasId], callback);
  },
  createKelas: (data, callback) => {
    db.query('INSERT INTO kelas SET ? ', data, callback);
  },
  updateKelas: (kelasId, data, callback) => {
    db.query('UPDATE kelas SET ? WHERE id = ? ', [data, kelasId], callback);
  },
  deletekelas: (kelasId, callback) => {
    db.query('DELETE FROM kelas where id = ?', [kelasId], callback);
  },
};

module.exports = Kelas;
