const db = require('../db/config');

const Guru = {
  getAll: (callback) => {
    db.query('SELECT * FROM gurus', callback);
  },
  getById: (id, callback) => {
    db.query(
      'SELECT g.id AS guruId, g.hobi AS guru_hobi, g.alamat AS guru_alamat, g.email as guru_email, g.nama AS guru_nama, g.tanggal_lahir AS guru_tanggal_lahir, g.user_id AS guru_userId, g.gambar AS guru_gambar, g.no_telepon AS guru_no_telepon, wl.id AS walikelasId, wl.kelas_id as kelasId,  wkm.id AS wkmId, wks.id AS wksId FROM gurus g LEFT JOIN walikelas wl ON g.id = wl.guru_id LEFT JOIN wakakurikulum wkm ON g.id = wkm.guru_id LEFT JOIN wakakesiswaan wks ON g.id = wks.guruId WHERE g.user_id = ?',
      [id],
      callback,
    );
  },
  create: (data, callback) => {
    db.query('INSERT INTO gurus SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE gurus SET ? WHERE user_id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM gurus WHERE user_id = ?', [id], callback);
  },
  getWalikelas: (callback) => {
    db.query(
      'SELECT wl.id AS walikelas_id, gr.id AS guru_id, gr.nama AS guru_nama, kl.id AS kelas_id, kl.title AS kelas_nama FROM walikelas wl JOIN gurus gr ON wl.guru_id = gr.id JOIN kelas kl ON wl.kelas_id = kl.id',
      callback,
    );
  },
  getWalikelasByGuruId: (guruId, callback) => {
    db.query(
      'SELECT wl.id AS walikelas_id, gr.id AS guru_id, gr.nama AS guru_nama, kl.id AS kelas_id, kl.title AS kelas_nama FROM walikelas wl JOIN gurus gr ON wl.guru_id = gr.id JOIN kelas kl ON wl.kelas_id = kl.id WHERE wl.guru_id = ?',
      [guruId],
      callback,
    );
  },
  getWalikelasByKelasId: (kelasId, callback) => {
    db.query(
      'SELECT wl.id AS walikelas_id, gr.id AS guru_id, gr.nama AS guru_nama, kl.id AS kelas_id, kl.tingkat AS kelas_tingkat, kl.title AS kelas_nama FROM walikelas wl JOIN gurus gr ON wl.guru_id = gr.id JOIN kelas kl ON wl.kelas_id = kl.id WHERE wl.kelas_id = ?',
      [kelasId],
      callback,
    );
  },
  getKesiswaan: (callback) => {
    db.query(
      'SELECT wks.guruId, gr.nama FROM wakakesiswaan wks JOIN gurus gr ON wks.guruId = gr.id',
      callback,
    );
  },
  createWalikelas: (data, callback) => {
    db.query('INSERT INTO walikelas SET ? ', data, callback);
  },
};

module.exports = Guru;
