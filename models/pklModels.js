const db = require('../db/config');

const PKL = {
  getAll: (callback) => {
    db.query(
      'SELECT  pkl.id, pkl.guru_id, pkl.siswa_id, pkl.jurusan, pkl.progres, pkl.tanggal_mulai, pkl.tanggal_selesai, siswa.nama AS nama_siswa, dudi.nama AS nama_dudi, gurus.nama AS nama_guru, kelas.tingkat AS tingkatKelas, kelas.title AS titleKelas FROM  pkl JOIN  siswa ON pkl.siswa_id = siswa.id JOIN  dudi ON pkl.dudi_id = dudi.id JOIN  gurus ON pkl.guru_id = gurus.id JOIN kelas ON siswa.kelas_id = kelas.id;',
      callback,
    );
  },
  getByGuruId: (guruId, callback) => {
    db.query(
      'SELECT  pkl.id, pkl.guru_id, pkl.siswa_id, pkl.jurusan, pkl.progres, pkl.tanggal_mulai, pkl.tanggal_selesai, siswa.nama AS nama_siswa, dudi.nama AS nama_dudi, gurus.nama AS nama_guru, kelas.tingkat AS tingkatKelas, kelas.title AS titleKelas FROM  pkl JOIN  siswa ON pkl.siswa_id = siswa.id JOIN  dudi ON pkl.dudi_id = dudi.id JOIN  gurus ON pkl.guru_id = gurus.id JOIN kelas ON siswa.kelas_id = kelas.id WHERE pkl.guru_id = ? ;',
      [guruId],
      callback,
    );
  },
  getBysiswaId: (siswaId, callback) => {
    db.query(
      'SELECT  pkl.id, pkl.guru_id, pkl.siswa_id, pkl.progres, pkl.jurusan, pkl.tanggal_mulai, pkl.tanggal_selesai, siswa.nama AS nama_siswa, dudi.nama AS nama_dudi, gurus.nama AS nama_guru, kelas.tingkat AS tingkatKelas, kelas.title AS titleKelas FROM  pkl JOIN  siswa ON pkl.siswa_id = siswa.id JOIN  dudi ON pkl.dudi_id = dudi.id JOIN  gurus ON pkl.guru_id = gurus.id JOIN kelas ON siswa.kelas_id = kelas.id WHERE pkl.siswa_id = ? ;',
      [siswaId],
      callback,
    );
  },
  addPKL: (data, callback) => {
    db.query(`INSERT INTO pkl SET ?`, [data], callback);
  },
  updatePKL: (id, data, callback) => {
    db.query(`UPDATE pkl SET ? WHERE id = ?`, [data, id], callback);
  },
  deletePKL: (id, callback) => {
    db.query(`DELETE FROM pkl WHERE id = ? `, [id], callback);
  },
};

module.exports = PKL;
