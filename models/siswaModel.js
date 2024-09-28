const db = require('../db/config');

const Siswa = {
  getAll: (callback) => {
    db.query('SELECT * FROM siswa', callback);
  },
  getById: (userId, callback) => {
    db.query(
      'SELECT * FROM siswa WHERE user_id = ? LIMIT 1',
      [userId],
      callback,
    );
  },
  getByKelasId: (kelasId, callback) => {
    db.query(
      "SELECT  s.id, s.nama, s.nis, s.alamat, s.kelas_id, s.hobi, k.tingkat, k.title, COUNT(CASE WHEN a.status_absen = 'H' THEN 1 END) AS hadir, COUNT(CASE WHEN a.status_absen = 'I' THEN 1 END) AS izin, COUNT(CASE WHEN a.status_absen = 'S' THEN 1 END) AS sakit, COUNT(CASE WHEN a.status_absen = 'A' THEN 1 END) AS alfa FROM  siswa s LEFT JOIN  logabsensiwalkel a ON s.id = a.siswa_id JOIN kelas k ON s.kelas_id = k.id WHERE  s.kelas_id = ? GROUP BY  s.id, s.nama, s.nis, s.alamat, s.kelas_id, s.hobi",
      [kelasId],
      callback,
    );
  },
  create: (data, callback) => {
    db.query('INSERT INTO siswa SET ?', data, callback);
  },
  update: (userId, data, callback) => {
    db.query('UPDATE siswa SET ? WHERE user_id = ?', [data, userId], callback);
  },
  delete: (userId, callback) => {
    db.query('DELETE FROM siswa WHERE user_id = ?', [userId], callback);
  },
};

module.exports = Siswa;
