const db = require('../db/config');
const DataMengajar = {
    getDataMengajar: (callback) => {
        db.query(" SELECT  datamengajar.id AS datamengajar_id, gurus.id AS guru_id,  gurus.nama AS guru_nama,  kelas.id AS kelas_id,  kelas.title AS kelas_nama, kelas.tingkat AS kelas_tingkat,  mapel.id AS mapel_id,  mapel.namaMapel AS mapel_nama FROM datamengajar JOIN kelas ON datamengajar.kelas_id = kelas.id JOIN mapel ON datamengajar.mapel_id = mapel.id JOIN gurus ON datamengajar.guru_id = gurus.id ", callback);
    },
    getDataMengajarById: (id, callback) => {
        db.query(" SELECT  datamengajar.id AS datamengajar_id, gurus.id AS guru_id,  gurus.nama AS guru_nama,  kelas.id AS kelas_id,  kelas.title AS kelas_nama, kelas.tingkat AS kelas_tingkat,  mapel.id AS mapel_id,  mapel.namaMapel AS mapel_nama FROM datamengajar JOIN kelas ON datamengajar.kelas_id = kelas.id JOIN mapel ON datamengajar.mapel_id = mapel.id JOIN gurus ON datamengajar.guru_id = gurus.id where datamengajar.id = ? ", [id], callback);
    },
    create: (data, callback) => {
        db.query("INSERT INTO datamengajar SET ? ", [data], callback);
    },
    update: (id, data, callback) => {
        db.query("UPDATE datamengajar SET ? WHERE id = ?", [data, id], callback);
    },
    delete: (id, callback) => {
        db.query("DELETE FROM datamengajar WHERE id = ? ", [id], callback);
    }
}


module.exports = DataMengajar;