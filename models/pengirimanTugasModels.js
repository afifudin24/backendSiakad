const db = require('../db/config');

const PengirimanTugas = {
  getAll: (callback) => {
    db.query('SELECT * FROM pengiriman_tugas', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM pengiriman_tugas WHERE id = ? ', [id], callback);
  },
  getBySiswa: (idSiswa, callback) => {
    db.query(
      'SELECT pt.pengiriman_id, pt.tugas_id, pt.siswa_id, pt.tanggal_pengumpulan, pt.file, pt.status AS status_pengiriman, tk judul_tugas, tk.deskripsi, tk.tanggal_dibuat, tk.tanggal_deadline, tk.status AS status_tugas, s.nama AS nama_siswa, s.kelas_id, k.title, k.tingkat, m.id AS mapel_id, m.nama_mapel, g.id AS guru_id, g.nama AS nama_guru FROM pengiriman_tugas pt INNER JOIN tugas_kelas tk ON pt.tugas_id = tk.id INNER JOIN siswa s ON pt.siswa_id = s.id INNER JOIN kelas k ON s.kelas_id = k.id INNER JOIN mapel m ON tk.mapel_id = m.id INNER JOIN gurus g ON k.guru_id = g.id WHERE pt.siswa_id = ?',
      [idSiswa],
      callback,
    );
  },
  create: (data, callback) => {
    db.query('INSERT INTO pengiriman_tugas SET ?', [data], callback);
  },
  update: (id, data, callback) => {
    db.query(
      'UPDATE pengiriman_tugas SET ? WHERE id = ? ',
      [data, id],
      callback,
    );
  },
  delete: (id, callback) => {
    db.query('DELETE FROM pengiriman_tugas WHERE id = ?', [id], callback);
  },
};

module.exports = PengirimanTugas;
