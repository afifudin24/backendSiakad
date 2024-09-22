const db = require('../db/config');

const Ejurnal = {
  getByGuruId: (idGuru, callback) => {
    db.query(
      'SELECT  e.id AS ejurnal_id, e.tgl_jurnal, e.pembahasan, e.jml_hadir, e.jml_izin, e.jml_sakit, e.jml_alfa, g.id as guru_id ,g.nama AS nama_guru, k.id AS kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, dm.id AS data_mengajar_id, m.namaMapel AS nama_mapel FROM  ejurnal e INNER JOIN  datamengajar dm ON e.mengajar_id = dm.id INNER JOIN  gurus g ON dm.guru_id = g.id INNER JOIN  kelas k ON dm.kelas_id = k.id INNER JOIN  mapel m ON dm.mapel_id = m.id WHERE  g.id = ?;',
      [idGuru],
      callback,
    );
  },
  getBymengajarIdMonth: (idMengajar, month, year, callback) => {
    db.query(
      'SELECT  e.id AS ejurnal_id, e.tgl_jurnal, e.pembahasan, e.jml_hadir, e.jml_izin, e.jml_sakit, e.jml_alfa, g.id as guru_id ,g.nama AS nama_guru, k.id AS kelas_id, k.title AS nama_kelas, k.tingkat AS tingkat_kelas, dm.id AS data_mengajar_id, m.namaMapel AS nama_mapel FROM  ejurnal e INNER JOIN  datamengajar dm ON e.mengajar_id = dm.id INNER JOIN  gurus g ON dm.guru_id = g.id INNER JOIN  kelas k ON dm.kelas_id = k.id INNER JOIN  mapel m ON dm.mapel_id = m.id WHERE dm.id = ?  AND MONTH(e.tgl_jurnal) = ? AND YEAR(e.tgl_jurnal) = ?',
      [idMengajar, month, year],
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
  createJurnal: (data, callback) => {
    db.query('INSERT INTO ejurnal SET ?', [data], callback);
  },
  updateJurnal: (id, data, callback) => {
    db.query('UPDATE ejurnal SET ? WHERE id = ?', [data, id], callback);
  },
};

module.exports = Ejurnal;
