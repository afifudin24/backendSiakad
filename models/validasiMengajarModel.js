const db = require('../db/config')

const ValidasiMengajar = {
  getValidasiMengajarByJurnalIdSiswa: (jurnalId, siswaId, callback) => {
    db.query(
      `SELECT * FROM validasimengajar WHERE ejurnalId = ? AND siswaId = ?`,
      [jurnalId, siswaId],
      callback
    )
  },
  getValidasiMengajarByMengajarId : (mengajarId,callback) => {
    db.query(`SELECT mengajarId, ROUND(SUM(CASE WHEN statusHadir = 'Hadir' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS persenHadir,  ROUND(SUM(CASE WHEN statusHadir = 'Tidak Hadir' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS persenTidakHadir, ROUND(SUM(CASE WHEN materiSesuai = 'Sesuai' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS persenMateriSesuai, ROUND(SUM(CASE WHEN materiSesuai = 'Tidak Sesuai' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS persenTidakSesuai,ROUND(SUM(CASE WHEN prosesPengajaran = 'Baik' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS persenBaik, ROUND(SUM(CASE WHEN prosesPengajaran = 'Cukup Baik' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS persenCukupBaik, ROUND(SUM(CASE WHEN prosesPengajaran = 'Kurang Baik' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS persenKurangBaik FROM validasimengajar WHERE mengajarId = ? GROUP BY mengajarId`,[mengajarId],callback)
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
