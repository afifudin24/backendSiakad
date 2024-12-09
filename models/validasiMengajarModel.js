const db = require('../db/config')

const ValidasiMengajar = {
  getValidasiMengajarByJurnalIdSiswa: (jurnalId, siswaId, callback) => {
    db.query(
      `SELECT * FROM validasimengajar WHERE ejurnalId = ? AND siswaId = ?`,
      [jurnalId, siswaId],
      callback
    )
  },
  insertValidasi: (data, callback) => {
    db.query(`INSERT INTO validasimengajar SET ?`, data, callback)
  },
  cekRequireValidasi: (siswaId, callback) => {
    db.query(
      `SELECT e.id AS ejurnalId, e.pembahasan, e.tgl_jurnal, m.namaMapel AS namaMapel, dm.id AS datamengajarId, s.id AS siswaId, s.nama AS namaSiswa, gr.nama AS namaGuru, k.title AS titleKelas, k.tingkat AS tingkatKelas FROM ejurnal e JOIN datamengajar dm ON e.mengajar_id = dm.id JOIN kelas k ON dm.kelas_id = k.id JOIN gurus gr ON gr.id = dm.guru_id JOIN siswa s ON k.id = s.kelas_id JOIN mapel m ON dm.mapel_id = m.id LEFT JOIN validasimengajar v ON v.siswaId = s.id AND v.ejurnalId = e.id JOIN logabsensi la ON la.mengajar_id = dm.id AND la.tgl_absen = e.tgl_jurnal WHERE s.id = 10 AND v.siswaId IS NULL AND la.status_absensi = 'H'`,
      [siswaId],
      callback
    )
  }
}

module.exports = ValidasiMengajar
