const { getByJadwalMengajar } = require('../controllers/ejurnalController');
const db = require('../db/config');

const Ejurnal = {
  getByJurnalId: (idJurnal, callback) => {
    db.query(
      `SELECT  e.id AS ejurnal_id, e.tgl_jurnal, e.pembahasan, e.jml_hadir, e.jml_izin, e.jml_sakit, e.jml_alfa, g.id as guru_id ,g.nama AS nama_guru, k.id AS kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, dm.id AS data_mengajar_id, m.namaMapel AS nama_mapel FROM  ejurnal e INNER JOIN  datamengajar dm ON e.mengajar_id = dm.id INNER JOIN  gurus g ON dm.guru_id = g.id INNER JOIN  kelas k ON dm.kelas_id = k.id INNER JOIN  mapel m ON dm.mapel_id = m.id WHERE e.id = ?`,
      [idJurnal],
      callback,
    );
  },
  getByGuruId: (idGuru, callback) => {
    db.query(
      'SELECT  e.id AS ejurnal_id, e.tgl_jurnal, e.pembahasan, e.jml_hadir, e.jml_izin, e.jml_sakit, e.jml_alfa, g.id as guru_id ,g.nama AS nama_guru, k.id AS kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, dm.id AS data_mengajar_id, m.namaMapel AS nama_mapel FROM  ejurnal e INNER JOIN  datamengajar dm ON e.mengajar_id = dm.id INNER JOIN  gurus g ON dm.guru_id = g.id INNER JOIN  kelas k ON dm.kelas_id = k.id INNER JOIN  mapel m ON dm.mapel_id = m.id WHERE  g.id = ?;',
      [idGuru],
      callback,
    );
  },
  getBymengajarIdMonth: (idMengajar, month, year, callback) => {
    db.query(
      'SELECT  e.id AS ejurnal_id, e.tgl_jurnal, e.pembahasan, e.jml_hadir, e.jml_izin, e.jml_sakit, e.jml_alfa, e.tgl_jurnal AS tgl_jurnal, g.id as guru_id ,g.nama AS nama_guru, k.id AS kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, dm.id AS data_mengajar_id, m.namaMapel AS nama_mapel FROM  ejurnal e INNER JOIN  datamengajar dm ON e.mengajar_id = dm.id INNER JOIN  gurus g ON dm.guru_id = g.id INNER JOIN  kelas k ON dm.kelas_id = k.id INNER JOIN  mapel m ON dm.mapel_id = m.id WHERE dm.id = ?  AND MONTH(e.tgl_jurnal) = ? AND YEAR(e.tgl_jurnal) = ?',
      [idMengajar, month, year],
      callback,
    );
  },
  getByKelasIdMonth: (kelasId, month, callback) => {
    db.query(
      'SELECT  e.id AS ejurnal_id, e.tgl_jurnal, e.pembahasan, e.jml_hadir, e.jml_izin, e.jml_sakit, e.jml_alfa, e.tgl_jurnal AS tgl_jurnal, g.id as guru_id ,g.nama AS nama_guru, k.id AS kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, dm.id AS data_mengajar_id, m.namaMapel AS nama_mapel FROM  ejurnal e INNER JOIN  datamengajar dm ON e.mengajar_id = dm.id INNER JOIN  gurus g ON dm.guru_id = g.id INNER JOIN  kelas k ON dm.kelas_id = k.id INNER JOIN  mapel m ON dm.mapel_id = m.id WHERE k.id = ?  AND MONTH(e.tgl_jurnal) = ? ',
      [kelasId, month],
      callback,
    );
  },
  getBymengajarIdDate: (idMengajar, date, callback) => {
    db.query(
      'SELECT  e.id AS ejurnal_id, e.tgl_jurnal, e.pembahasan, e.jml_hadir, e.jml_izin, e.jml_sakit, e.jml_alfa, g.id as guru_id ,g.nama AS nama_guru, k.id AS kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, dm.id AS data_mengajar_id, m.namaMapel AS nama_mapel FROM  ejurnal e INNER JOIN  datamengajar dm ON e.mengajar_id = dm.id INNER JOIN  gurus g ON dm.guru_id = g.id INNER JOIN  kelas k ON dm.kelas_id = k.id INNER JOIN  mapel m ON dm.mapel_id = m.id WHERE dm.id = ? AND e.tgl_jurnal = ?',
      [idMengajar, date],
      callback,
    );
  },
  getByKelasIdDate: (kelasId, date, callback) => {
    console.log('nih', kelasId);
    db.query(
      'SELECT  e.id AS ejurnal_id, e.tgl_jurnal, e.pembahasan, e.jml_hadir, e.jml_izin, e.jml_sakit, e.jml_alfa, e.tgl_jurnal AS tgl_jurnal, g.id as guru_id ,g.nama AS nama_guru, k.id AS kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, dm.id AS data_mengajar_id, m.namaMapel AS nama_mapel FROM  ejurnal e INNER JOIN  datamengajar dm ON e.mengajar_id = dm.id INNER JOIN  gurus g ON dm.guru_id = g.id INNER JOIN  kelas k ON dm.kelas_id = k.id INNER JOIN  mapel m ON dm.mapel_id = m.id WHERE k.id = ?  AND e.tgl_jurnal = ?',
      [kelasId, date],
      callback,
    );
  },
  getByGuruIdDate: (idGuru, date, callback) => {
    db.query(
      'SELECT e.id AS ejurnal_id, e.tgl_jurnal, e.pembahasan, e.jml_hadir, e.jml_izin, e.jml_sakit, e.jml_alfa, g.id as guru_id ,g.nama AS nama_guru, k.id AS kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, dm.id AS data_mengajar_id, m.namaMapel AS nama_mapel FROM ejurnal e INNER JOIN datamengajar dm ON e.mengajar_id = dm.id INNER JOIN gurus g ON dm.guru_id = g.id INNER JOIN kelas k ON dm.kelas_id = k.id INNER JOIN mapel m ON dm.mapel_id = m.id WHERE g.id = ? AND e.tgl_jurnal = ?',
      [idGuru, date],
      callback,
    );
  },
  getByguruIdLast7Days: (idGuru, callback) => {
    db.query(
      'SELECT e.id AS ejurnal_id, e.tgl_jurnal, e.pembahasan, e.jml_hadir, e.jml_izin, e.jml_sakit, e.jml_alfa, g.id as guru_id ,g.nama AS nama_guru, k.id AS kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, dm.id AS data_mengajar_id, m.namaMapel AS nama_mapel FROM ejurnal e INNER JOIN datamengajar dm ON e.mengajar_id = dm.id INNER JOIN gurus g ON dm.guru_id = g.id INNER JOIN kelas k ON dm.kelas_id = k.id INNER JOIN mapel m ON dm.mapel_id = m.id WHERE g.id = ? AND e.tgl_jurnal BETWEEN DATE_SUB(CURDATE(), INTERVAL 7 DAY) AND CURDATE()',
      [idGuru],
      callback,
    );
  },
  getByKelasIdLast7Days: (kelasId, callback) => {
    db.query(
      'SELECT e.id AS ejurnal_id, e.tgl_jurnal, e.pembahasan, e.jml_hadir, e.jml_izin, e.jml_sakit, e.jml_alfa, g.id as guru_id ,g.nama AS nama_guru, k.id AS kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, dm.id AS data_mengajar_id, m.namaMapel AS nama_mapel FROM ejurnal e INNER JOIN datamengajar dm ON e.mengajar_id = dm.id INNER JOIN gurus g ON dm.guru_id = g.id INNER JOIN kelas k ON dm.kelas_id = k.id INNER JOIN mapel m ON dm.mapel_id = m.id WHERE k.id = ? AND e.tgl_jurnal BETWEEN DATE_SUB(CURDATE(), INTERVAL 7 DAY) AND CURDATE()',
      [kelasId],
      callback,
    );
  },
  getByJadwalMengajar: (guruId, tanggal, hari, callback) => {
    db.query(
      `SELECT 
    jadwalmengajar.*, mpl.*, kelas.*,
    ejurnal.id AS ejurnal_id
FROM 
    jadwalmengajar
JOIN 
    datamengajar ON jadwalmengajar.mengajar_id = datamengajar.id
    JOIN mapel mpl ON mpl.id = datamengajar.mapel_id
    JOIN kelas ON kelas.id = datamengajar.kelas_id
LEFT JOIN 
    ejurnal ON jadwalmengajar.mengajar_id = ejurnal.mengajar_id 
              AND ejurnal.tgl_jurnal = ?
WHERE 
    datamengajar.guru_id = ?
    AND jadwalmengajar.hari = ?
ORDER BY 
    jadwalmengajar.jam_mulai;`,
      [tanggal, guruId, hari],
      callback,
    );
  },
  countTotal: (guruId, callback) => {
    db.query(
      `SELECT COUNT(ejurnal.id) AS total_ejurnal FROM ejurnal JOIN datamengajar ON ejurnal.mengajar_id = datamengajar.id WHERE datamengajar.guru_id = ?`,
      [guruId],
      callback,
    );
  },
  createJurnal: (data, callback) => {
    db.query('INSERT INTO ejurnal SET ?', [data], callback);
  },
  updateJurnal: (id, data, callback) => {
    db.query('UPDATE ejurnal SET ? WHERE id = ?', [data, id], callback);
  },
};

module.exports = Ejurnal;
