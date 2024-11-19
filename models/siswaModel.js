const db = require('../db/config');

const Siswa = {
  getAll: (callback) => {
    db.query('SELECT * FROM siswa', callback);
  },
  getById: (userId, callback) => {
    db.query(
      'SELECT s.id as siswa_id, s.nama, s.nis, s.alamat, s.kelas_id, s.hobi, s.gambar, ak.siswaId AS adminkelas , k.tingkat, k.title FROM siswa s JOIN kelas k ON s.kelas_id = k.id LEFT JOIN adminkelas ak ON s.id = ak.siswaId WHERE user_id = ? LIMIT 1',
      [userId],
      callback,
    );
  },
  getByKelasId: (kelasId, callback) => {
    db.query(
      "SELECT  s.id, s.user_id, s.nama, s.nis, s.alamat, s.kelas_id, s.hobi, s.gambar, k.tingkat, k.title ,COUNT(CASE WHEN a.status_absen = 'H' THEN 1 END) AS hadir, COUNT(CASE WHEN a.status_absen = 'I' THEN 1 END) AS izin, COUNT(CASE WHEN a.status_absen = 'S' THEN 1 END) AS sakit, COUNT(CASE WHEN a.status_absen = 'A' THEN 1 END) AS alfa FROM  siswa s LEFT JOIN  logabsensiwalkel a ON s.id = a.siswa_id JOIN kelas k ON s.kelas_id = k.id WHERE  s.kelas_id = ? GROUP BY  s.id, s.nama, s.nis, s.alamat, s.kelas_id, s.hobi",
      [kelasId],
      callback,
    );
  },
  getAdminKelas: (callback) => {
    db.query(
      'SELECT * FROM adminkelas ak JOIN siswa s ON ak.siswaId = s.id JOIN kelas k ON ak.kelasId = k.id',
      callback,
    );
  },
  create: (data, callback) => {
    db.query('INSERT INTO siswa SET ?', data, callback);
  },
  insertAdmin: (data, callback) => {
    db.query('INSERT INTO adminkelas SET ?', [data], callback);
  },
  update: (userId, data, callback) => {
    db.query('UPDATE siswa SET ? WHERE user_id = ?', [data, userId], callback);
  },
  updateAdmin: (data, callback) => {
    db.query(
      `UPDATE adminkelas SET ? WHERE kelasId = ?`,
      [data, data.kelasId],
      callback,
    );
  },
  delete: (userId, callback) => {
    db.query('DELETE FROM siswa WHERE user_id = ?', [userId], callback);
  },
  deleteAdminKelas: (kelasId, callback) => {
    db.query('DELETE FROM adminkelas WHERE kelasId = ?', [kelasId], callback);
  },
};

module.exports = Siswa;
