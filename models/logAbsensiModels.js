const db = require('../db/config');

const LogAbsensi = {
  getByMengajarIdMonth: (mengajarId, month, callback) => {
    db.query(
      `SELECT la.id AS logabsensi_id, la.tgl_absen, la.pertemuan_ke, la.status_absensi, dm.id AS mengajar_id, m.namaMapel AS nama_mapel, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, g.id AS guru_id, g.nama AS nama_guru, s.id AS siswa_id, s.nama AS nama_siswa,  COUNT(CASE WHEN la.status_absensi = 'H' THEN 1 END) AS jumlah_hadir, COUNT(CASE WHEN la.status_absensi = 'I' THEN 1 END) AS jumlah_izin, COUNT(CASE WHEN la.status_absensi = 'S' THEN 1 END) AS jumlah_sakit, COUNT(CASE WHEN la.status_absensi = 'A' THEN 1 END) AS jumlah_alfa FROM  logabsensi la INNER JOIN  datamengajar dm ON la.mengajar_id = dm.id INNER JOIN  mapel m ON dm.mapel_id = m.id INNER JOIN  kelas k ON dm.kelas_id = k.id INNER JOIN  gurus g ON dm.guru_id = g.id INNER JOIN  siswa s ON la.siswa_id = s.id WHERE  dm.id = ? AND MONTH(la.tgl_absen) = ?  GROUP BY 
    la.siswa_id, la.tgl_absen  ORDER BY  la.tgl_absen; `,
      [mengajarId, month],
      callback,
    );
  },
  getByMengajarIdDate: (mengajarId, date, callback) => {
    db.query(
      `SELECT la.id AS logabsensi_id, la.tgl_absen, la.pertemuan_ke, la.status_absensi, dm.id AS mengajar_id, m.namaMapel AS nama_mapel, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, g.id AS guru_id, g.nama AS nama_guru, s.id AS siswa_id, s.nama AS nama_siswa FROM  logabsensi la INNER JOIN  datamengajar dm ON la.mengajar_id = dm.id INNER JOIN  mapel m ON dm.mapel_id = m.id INNER JOIN  kelas k ON dm.kelas_id = k.id INNER JOIN  gurus g ON dm.guru_id = g.id INNER JOIN  siswa s ON la.siswa_id = s.id WHERE  dm.id = ? AND la.tgl_absen = ?  GROUP BY 
    la.siswa_id, la.tgl_absen  ORDER BY  la.tgl_absen; `,
      [mengajarId, date],
      callback,
    );
  },
  insertAbsensi: (data, callback) => {
    const values = data.map((item) => [
      item.mengajar_id,
      item.siswa_id,
      item.tgl_absen,
      item.pertemuan_ke,
      item.status_absensi,
    ]);
    const sql =
      'INSERT INTO logabsensi (mengajar_id, siswa_id, tgl_absen, pertemuan_ke, status_absensi) VALUES ?';

    db.query(sql, [values], callback);
  },
  updateAbsensi: (data, date, callback) => {
    console.log(data[0].dataAbsen);
    const values = data.map((item) => [
      item.dataAbsen[0].status_absensi,
      item.dataAbsen[0].mengajar_id,
      date,
      item.dataAbsen[0].tgl_absen,
      item.dataAbsen[0].pertemuan_ke,
    ]);

    const sql = `
    UPDATE logabsensi 
    SET status_absensi = ? 
    WHERE mengajar_id = ? 
    AND siswa_id = ? 
    AND tgl_absen = ? 
    AND pertemuan_ke = ?`;

    // Loop through values and execute multiple update queries
    // values.forEach((value) => {
    //   db.query(sql, value, callback);
    // });
    // Using Promise.all to wait for all queries to complete before invoking callback
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

module.exports = LogAbsensi;
