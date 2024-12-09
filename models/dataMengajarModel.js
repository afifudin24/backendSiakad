const db = require('../db/config');
const DataMengajar = {
  getDataMengajar: (callback) => {
    db.query(
      ' SELECT  datamengajar.id AS datamengajar_id, gurus.id AS guru_id,  gurus.nama AS guru_nama,  kelas.id AS kelas_id,  kelas.title AS kelas_nama, kelas.tingkat AS kelas_tingkat,  mapel.id AS mapel_id,  mapel.namaMapel AS mapel_nama FROM datamengajar JOIN kelas ON datamengajar.kelas_id = kelas.id JOIN mapel ON datamengajar.mapel_id = mapel.id JOIN gurus ON datamengajar.guru_id = gurus.id ',
      callback,
    );
  },
  getDataMengajarById: (id, callback) => {
    db.query(
      ' SELECT  datamengajar.id AS datamengajar_id, gurus.id AS guru_id,  gurus.nama AS guru_nama,  kelas.id AS kelas_id,  kelas.title AS kelas_nama, kelas.tingkat AS kelas_tingkat,  mapel.id AS mapel_id,  mapel.namaMapel AS mapel_nama FROM datamengajar JOIN kelas ON datamengajar.kelas_id = kelas.id JOIN mapel ON datamengajar.mapel_id = mapel.id JOIN gurus ON datamengajar.guru_id = gurus.id where datamengajar.id = ? ',
      [id],
      callback,
    );
  },
  getDataMengajarByGuruId: (guruId, callback) => {
    db.query(
      ' SELECT  datamengajar.id AS datamengajar_id, gurus.id AS guru_id,  gurus.nama AS guru_nama,  kelas.id AS kelas_id,  kelas.title AS kelas_nama, kelas.tingkat AS kelas_tingkat,  mapel.id AS mapel_id,  mapel.namaMapel AS mapel_nama FROM datamengajar JOIN kelas ON datamengajar.kelas_id = kelas.id JOIN mapel ON datamengajar.mapel_id = mapel.id JOIN gurus ON datamengajar.guru_id = gurus.id where gurus.id = ? ',
      [guruId],
      callback,
    );
  },
  getKelasMengajarId: (guruId, mapelId, callback) => {
    db.query(
      `SELECT k.id, k.tingkat ,k.title,  CASE  WHEN dm.kelas_id IS NOT NULL THEN true ELSE false END AS status FROM kelas k LEFT JOIN datamengajar dm ON k.id = dm.kelas_id  AND dm.guru_id = ? AND dm.mapel_id = ?`,
      [guruId, mapelId],
      callback,
    );
  },
  create: (data, callback) => {
    db.query('INSERT INTO datamengajar SET ? ', [data], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE datamengajar SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM datamengajar WHERE id = ? ', [id], callback);
  },
};

module.exports = DataMengajar;
