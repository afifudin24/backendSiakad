const db = require('../db/config')

const Guru = {
  getAll: callback => {
    db.query(
      'SELECT gurus.id, gurus.email, gurus.alamat, gurus.gambar, gurus.hobi, gurus.nama, gurus.no_telepon, gurus.tanggal_lahir, gurus.user_id, walikelas.id as walikelasId, wakakurikulum.id as wakakurikulumId, wakakesiswaan.id as wakakesiswaanId   FROM gurus LEFT JOIN walikelas ON gurus.id = walikelas.guru_id LEFT JOIN wakakurikulum ON gurus.id = wakakurikulum.guru_id LEFT JOIN wakakesiswaan ON gurus.id = wakakesiswaan.guruId',
      callback
    )
  },
  getById: (id, callback) => {
    db.query(
      'SELECT g.id AS guruId, g.hobi AS guru_hobi, g.alamat AS guru_alamat, g.email as guru_email, g.nama AS guru_nama, g.tanggal_lahir AS guru_tanggal_lahir, g.user_id AS guru_userId, g.gambar AS guru_gambar, g.no_telepon AS guru_no_telepon, wl.id AS walikelasId, wl.kelas_id as kelasId,  wkm.id AS wkmId, wks.id AS wksId FROM gurus g LEFT JOIN walikelas wl ON g.id = wl.guru_id LEFT JOIN wakakurikulum wkm ON g.id = wkm.guru_id LEFT JOIN wakakesiswaan wks ON g.id = wks.guruId WHERE g.user_id = ?',
      [id],
      callback
    )
  },
  create: (data, callback) => {
    db.query('INSERT INTO gurus SET ?', data, callback)
  },
  update: (id, data, callback) => {
    db.query('UPDATE gurus SET ? WHERE user_id = ?', [data, id], callback)
  },
  delete: (id, callback) => {
    db.query('DELETE FROM gurus WHERE user_id = ?', [id], callback)
  },
  getWalikelas: callback => {
    db.query(
      'SELECT wl.id AS walikelas_id, gr.id AS guru_id, gr.nama AS guru_nama, kl.id AS kelas_id, kl.title AS kelas_nama, kl.tingkat AS kelas_tingkat FROM walikelas wl JOIN gurus gr ON wl.guru_id = gr.id JOIN kelas kl ON wl.kelas_id = kl.id',
      callback
    )
  },
  getWalikelasByGuruId: (guruId, callback) => {
    db.query(
      'SELECT wl.id AS walikelas_id, gr.id AS guru_id, gr.nama AS guru_nama, kl.id AS kelas_id, kl.title AS kelas_nama FROM walikelas wl JOIN gurus gr ON wl.guru_id = gr.id JOIN kelas kl ON wl.kelas_id = kl.id WHERE wl.guru_id = ?',
      [guruId],
      callback
    )
  },
  getWalikelasByKelasId: (kelasId, callback) => {
    db.query(
      'SELECT wl.id AS walikelas_id, gr.id AS guru_id, gr.nama AS guru_nama, kl.id AS kelas_id, kl.tingkat AS kelas_tingkat, kl.title AS kelas_nama FROM walikelas wl JOIN gurus gr ON wl.guru_id = gr.id JOIN kelas kl ON wl.kelas_id = kl.id WHERE wl.kelas_id = ?',
      [kelasId],
      callback
    )
  },
  getKesiswaan: callback => {
    db.query(
      'SELECT wks.guruId, gr.nama FROM wakakesiswaan wks JOIN gurus gr ON wks.guruId = gr.id',
      callback
    )
  },
  createWalikelas: (data, callback) => {
    db.query('INSERT INTO walikelas SET ? ', data, callback)
  },
  deleteWalikelas: (id, callback) => {
    db.query('DELETE FROM walikelas where id = ?', [id], callback)
  },
  updateWalikelas: (id, data, callback) => {
    db.query('UPDATE walikelas SET ? WHERE id = ?', [data, id], callback)
  },
  cekWakaKesiswaan: callback => {
    db.query('SELECT COUNT(*) as total FROM wakakesiswaan', callback)
  },
  insertWakakesiswaan: (id, callback) => {
    db.query('INSERT into wakakesiswaan (guruId) VALUES (?)', [id], callback)
  },
  updateWakakesiswaan: (id, callback) => {
    db.query('UPDATE wakakesiswaan SET guruId = ?', [id], callback)
  },
  cekWakaKurikulum: callback => {
    db.query('SELECT COUNT(*) as total FROM wakakurikulum', callback)
  },
  insertWakakurikulum: (id, callback) => {
    db.query('INSERT into wakakurikulum (guru_id) VALUES (?)', [id], callback)
  },
  updateWakakurikulum: (id, callback) => {
    db.query('UPDATE wakakurikulum SET guru_id = ?', [id], callback)
  }
}

module.exports = Guru
