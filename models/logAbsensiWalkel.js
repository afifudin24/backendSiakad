const db = require('../db/config');

const LogAbsensiWalkel = {
  lastAbsensi: (kelasId, date, callback) => {
    db.query(
      `SELECT absen_ke FROM logabsensiwalkel 
             WHERE kelas_id = ? AND tgl_absen != ? 
             ORDER BY absen_ke DESC LIMIT 1`,
      [kelasId, date],
      callback,
    );
  },
  getByKelas: (kelasId, callback) => {
    db.query(
      'SELECT la.id, la.siswa_id, s.nama AS nama_siswa, la.kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, la.tgl_absen, la.status_absen FROM  logabsensiwalkel la JOIN siswa s ON la.siswa_id = s.id JOIN  kelas k ON la.kelas_id = k.id WHERE  la.kelas_id = ? ;',
      [kelasId],
      callback,
    );
  },
  getByKelasIdMonth: (kelasId, month, callback) => {
    db.query(
      'SELECT la.id, la.siswa_id, s.nama AS nama_siswa, la.kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, la.tgl_absen, la.status_absen FROM  logabsensiwalkel la JOIN siswa s ON la.siswa_id = s.id JOIN  kelas k ON la.kelas_id = k.id WHERE  la.kelas_id = ? AND MONTH(la.tgl_absen) = ?;',
      [kelasId, month],
      callback,
    );
  },
  getByKelasIdDate: (kelasId, date, callback) => {
    db.query(
      `SELECT la.id, la.siswa_id, s.nama AS nama_siswa, la.kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, la.tgl_absen, la.status_absen FROM  logabsensiwalkel la JOIN siswa s ON la.siswa_id = s.id JOIN  kelas k ON la.kelas_id = k.id WHERE  la.kelas_id = ? AND la.tgl_absen = ? `,
      [kelasId, date],
      callback,
    );
  },
  getBySiswaIdMonth: (siswaId, month, callback) => {
    db.query(
      'SELECT la.id, la.siswa_id, s.nama AS nama_siswa, la.kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, la.tgl_absen, la.status_absen FROM  logabsensiwalkel la JOIN siswa s ON la.siswa_id = s.id JOIN  kelas k ON la.kelas_id = k.id WHERE  la.siswa_id = ? AND MONTH(la.tgl_absen) = ?;',
      [siswaId, month],
      callback,
    );
  },
  createAbsensi: (data, callback) => {
    const values = data.map((item) => [
      item.kelas_id,
      item.siswa_id,
      item.tgl_absen,
      item.status_absen,
    ]);
    const sql =
      'INSERT INTO logabsensiwalkel (kelas_id, siswa_id, tgl_absen, status_absen) VALUES ?';

    db.query(sql, [values], callback);
  },
  updateAbsensi: (data, date, callback) => {
    console.log(data[0]);
    const values = data.map((item) => [
      item.status_absen,
      item.siswa_id,
      date,
      item.kelas_id,
    ]);

    const sql = `
        UPDATE logabsensiwalkel 
        SET status_absen = ? 
        WHERE 
       siswa_id = ? 
        AND tgl_absen = ?
        AND kelas_id = ? 
       `;
    const promises = values.map((value) => {
      return new Promise((resolve, reject) => {
        db.query(sql, value, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    });

    // Wait for all promises to complete
    Promise.all(promises)
      .then((results) => {
        callback(null, results); // Send all results back once done
      })
      .catch((err) => {
        callback(err); // Handle error if any of the queries fail
      });
  },
};

module.exports = LogAbsensiWalkel;
