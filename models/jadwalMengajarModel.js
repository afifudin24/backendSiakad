const db = require('../db/config');

const JadwalMengajar = {
  getJadwalMengajar: (callback) => {
    db.query(
      'SELECT  jm.id AS jadwal_id, jm.mengajar_id, jm.jamke AS jamke, jm.hari AS hari, jm.jam_mulai AS jamMulai, jm.jam_selesai AS jamSelesai, dm.id AS datamengajar_id, dm.mapel_id, dm.guru_id, dm.kelas_id, m.namaMapel AS mapel_nama, g.nama AS guru_nama, k.title AS kelas_nama, k.tingkat AS kelas_tingkat FROM  jadwalmengajar jm JOIN  datamengajar dm ON jm.mengajar_id = dm.id JOIN  mapel m ON dm.mapel_id = m.id JOIN  gurus g ON dm.guru_id = g.id JOIN  kelas k ON dm.kelas_id = k.id; ',
      callback,
    );
  },
  getJadwalMengajarById: (id, callback) => {
    db.query(
      'SELECT  jm.id AS jadwal_id, jm.mengajar_id, jm.jamke AS jamke, jm.hari AS hari, jm.jam_mulai AS jamMulai, jm.jam_selesai AS jamSelesai, dm.id AS datamengajar_id, dm.mapel_id, dm.guru_id, dm.kelas_id, m.namaMapel AS mapel_nama, g.nama AS guru_nama, k.title AS kelas_nama, k.tingkat AS kelas_tingkat FROM  jadwalmengajar jm JOIN  datamengajar dm ON jm.mengajar_id = dm.id JOIN  mapel m ON dm.mapel_id = m.id JOIN  gurus g ON dm.guru_id = g.id JOIN  kelas k ON dm.kelas_id = k.id WHERE jm.id = ? ',
      [id],
      callback,
    );
  },
  getJadwalMengajarByGuruId: (id, callback) => {
    db.query(
      'SELECT  jm.id AS jadwal_id, jm.mengajar_id, jm.jamke AS jamke, jm.hari AS hari, jm.jam_mulai AS jamMulai, jm.jam_selesai AS jamSelesai, dm.id AS datamengajar_id, dm.mapel_id, dm.guru_id, dm.kelas_id, m.namaMapel AS mapel_nama, g.nama AS guru_nama, k.title AS kelas_nama, k.tingkat AS kelas_tingkat FROM  jadwalmengajar jm JOIN  datamengajar dm ON jm.mengajar_id = dm.id JOIN  mapel m ON dm.mapel_id = m.id JOIN  gurus g ON dm.guru_id = g.id JOIN  kelas k ON dm.kelas_id = k.id WHERE dm.guru_id = ? ',
      [id],
      callback,
    );
  },
  getJadwalMengajarByKelasId: (id, callback) => {
    db.query(
      'SELECT  jm.id AS jadwal_id, jm.mengajar_id, jm.jamke AS jamke, jm.hari AS hari, jm.jam_mulai AS jamMulai, jm.jam_selesai AS jamSelesai, dm.id AS datamengajar_id, dm.mapel_id, dm.guru_id, dm.kelas_id, m.namaMapel AS mapel_nama, g.nama AS guru_nama, k.title AS kelas_nama, k.tingkat AS kelas_tingkat FROM  jadwalmengajar jm JOIN  datamengajar dm ON jm.mengajar_id = dm.id JOIN  mapel m ON dm.mapel_id = m.id JOIN  gurus g ON dm.guru_id = g.id JOIN  kelas k ON dm.kelas_id = k.id WHERE dm.kelas_id = ? ',
      [id],
      callback,
    );
  },
  getJadwalMengajarByKelasIdHari: (id, hari, callback) => {
    db.query(
      'SELECT  jm.id AS jadwal_id, jm.mengajar_id, jm.jamke AS jamke, jm.hari AS hari, jm.jam_mulai AS jamMulai, jm.jam_selesai AS jamSelesai, dm.id AS datamengajar_id, dm.mapel_id, dm.guru_id, dm.kelas_id, m.namaMapel AS mapel_nama, g.nama AS guru_nama, k.title AS kelas_nama, k.tingkat AS kelas_tingkat FROM  jadwalmengajar jm JOIN  datamengajar dm ON jm.mengajar_id = dm.id JOIN  mapel m ON dm.mapel_id = m.id JOIN  gurus g ON dm.guru_id = g.id JOIN  kelas k ON dm.kelas_id = k.id WHERE dm.kelas_id = ? AND jm.hari = ? ',
      [id, hari],
      callback,
    );
  },
  getJadwalMengajarByGuruIdHari: (id, hari, callback) => {
    db.query(
      'SELECT  jm.id AS jadwal_id, jm.mengajar_id, jm.jamke AS jamke, jm.hari AS hari, jm.jam_mulai AS jamMulai, jm.jam_selesai AS jamSelesai, dm.id AS datamengajar_id, dm.mapel_id, dm.guru_id, dm.kelas_id, m.namaMapel AS mapel_nama, g.nama AS guru_nama, k.title AS kelas_nama, k.tingkat AS kelas_tingkat FROM  jadwalmengajar jm JOIN  datamengajar dm ON jm.mengajar_id = dm.id JOIN  mapel m ON dm.mapel_id = m.id JOIN  gurus g ON dm.guru_id = g.id JOIN  kelas k ON dm.kelas_id = k.id WHERE dm.guru_id = ? AND jm.hari = ? ',
      [id, hari],
      callback,
    );
  },
  countTotal: (guruId, callback) => {
    db.query(
      `SELECT COUNT(jadwalmengajar.id) AS total_jadwal FROM jadwalmengajar JOIN datamengajar ON jadwalmengajar.mengajar_id = datamengajar.id WHERE datamengajar.guru_id = ?`,
      [guruId],
      callback,
    );
  },
  createJadwal: (data, callback) => {
    db.query('INSERT INTO jadwalmengajar SET ? ', [data], callback);
  },
  updateJadwal: (id, data, callback) => {
    db.query('UPDATE jadwalmengajar SET ? where id = ? ', [data, id], callback);
  },
  deleteJadwal: (id, callback) => {
    db.query('DELETE FROM jadwalmengajar WHERE id = ? ', [id], callback);
  },
};

module.exports = JadwalMengajar;
