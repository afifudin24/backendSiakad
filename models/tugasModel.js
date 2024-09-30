const db = require('../db/config');

const Tugas = {
  getAllTugas: (callback) => {
    db.query('SELECT * FROM tugas_kelas', callback);
  },
  getTugasByKelas: (idKelas, callback) => {
    db.query(
      'SELECT tk.id AS tugas_id, tk.judul_tugas, tk.deskripsi, tk.tanggal_dibuat, tk.tanggal_deadline, k.id AS kelas_id, k.title AS title_kelas, k.tingkat AS tingkat_kelas, m.id AS mapel_id, m.namaMapel, g.id AS guru_id, g.nama FROM tugas_kelas tk INNER JOIN kelas k ON tk.kelas_id = k.id INNER JOIN mapel m ON tk.mapel_id = m.id INNER JOIN gurus g ON tk.guru_id = g.id WHERE tk.kelas_id = ?;',
      [idKelas],
      callback,
    );
  },
  getTugasByKelasSiswa: (idKelas, idSiswa, callback) => {
    db.query(
      `SELECT 
    t.id AS tugas_id,
    t.judul_tugas AS judul_tugas,
    t.deskripsi AS deskripsi_tugas,
    t.tanggal_dibuat AS tugas_tanggal_dibuat,
    t.tanggal_deadline AS tugas_tanggal_deadline,
    k.id AS kelas_id,
    k.title AS nama_kelas,
    k.tingkat AS tingkat_kelas,
    m.id AS mapel_id,
    m.namaMapel AS nama_mapel,
    g.id AS guru_id,
    g.nama AS nama_guru,
    CASE 
        WHEN pt.id IS NOT NULL THEN true
        ELSE false
    END AS status_pengiriman
FROM 
    tugas_kelas t
INNER JOIN 
    kelas k 
    ON t.kelas_id = k.id
INNER JOIN 
    mapel m 
    ON t.mapel_id = m.id
INNER JOIN 
    gurus g 
    ON t.guru_id = g.id
LEFT JOIN 
    pengiriman_tugas pt 
    ON t.id = pt.tugas_id 
    AND pt.siswa_id = ?
WHERE 
    t.kelas_id = ?
ORDER BY 
    t.id;
`,
      [idSiswa, idKelas],
      callback,
    );
  },
  getTugasByKelasMapelSiswa: (idKelas, idSiswa, idMapel, callback) => {
    db.query(
      `SELECT 
    t.id AS tugas_id,
    t.judul_tugas AS judul_tugas,
    t.deskripsi AS deskripsi_tugas,
    t.tanggal_dibuat AS tugas_tanggal_dibuat,
    t.tanggal_deadline AS tugas_tanggal_deadline,
    k.id AS kelas_id,
    k.title AS nama_kelas,
    k.tingkat AS tingkat_kelas,
    m.id AS mapel_id,
    m.namaMapel AS nama_mapel,
    g.id AS guru_id,
    g.nama AS nama_guru,
    CASE 
        WHEN pt.id IS NOT NULL THEN true
        ELSE false
    END AS status_pengiriman
FROM 
    tugas_kelas t
INNER JOIN 
    kelas k 
    ON t.kelas_id = k.id
INNER JOIN 
    mapel m 
    ON t.mapel_id = m.id
INNER JOIN 
    gurus g 
    ON t.guru_id = g.id
LEFT JOIN 
    pengiriman_tugas pt 
    ON t.id = pt.tugas_id 
    AND pt.siswa_id = ?
WHERE 
    t.kelas_id = ? AND t.mapel_id = ?
ORDER BY 
    t.id;
`,
      [idSiswa, idKelas, idMapel],
      callback,
    );
  },
  getTugasByDataMengajarGuru: (guruId, callback) => {
    db.query(
      `SELECT
    t.id AS tugas_id,
    t.judul_tugas AS judul_tugas,
    t.deskripsi AS deskripsi_tugas,
    t.tanggal_dibuat AS tugas_tanggal_dibuat,
    t.tanggal_deadline AS tugas_tanggal_deadline,
    k.id AS kelas_id,
    k.title AS nama_kelas,
    k.tingkat AS tingkat_kelas,
    m.id AS mapel_id,
    m.namaMapel AS nama_mapel,
    g.id AS guru_id,
    g.nama AS nama_guru
FROM
    tugas_kelas t
INNER JOIN
    datamengajar dm ON t.datamengajar_id = dm.id
INNER JOIN
    kelas k ON dm.kelas_id = k.id
INNER JOIN
    mapel m ON dm.mapel_id = m.id
INNER JOIN
    gurus g ON dm.guru_id = g.id
WHERE
    dm.guru_id = ?
ORDER BY
    t.id;
`,
      [guruId],
      callback,
    );
  },
  getTugasByDataMengajarId: (datamengajarId, callback) => {
    db.query(
      `SELECT
    t.id AS tugas_id,
    t.judul_tugas AS judul_tugas,
    t.deskripsi AS deskripsi_tugas,
    t.tanggal_dibuat AS tugas_tanggal_dibuat,
    t.tanggal_deadline AS tugas_tanggal_deadline,
    k.id AS kelas_id,
    k.title AS nama_kelas,
    k.tingkat AS tingkat_kelas,
    m.id AS mapel_id,
    m.namaMapel AS nama_mapel,
    g.id AS guru_id,
    g.nama AS nama_guru
FROM
    tugas_kelas t
INNER JOIN
    datamengajar dm ON t.datamengajar_id = dm.id
INNER JOIN
    kelas k ON dm.kelas_id = k.id
INNER JOIN
    mapel m ON dm.mapel_id = m.id
INNER JOIN
    gurus g ON dm.guru_id = g.id
WHERE
    dm.id = ?
ORDER BY
    t.id;
`,
      [datamengajarId],
      callback,
    );
  },
  createTugas: (data, callback) => {
    db.query('INSERT INTO tugas_kelas SET ?', [data], callback);
  },
  updateTugas: (id, data, callback) => {
    db.query('UPDATE tugas_kelas SET ? WHERE id = ?', [data, id], callback);
  },
  deleteTugas: (id, callback) => {
    db.query('DELETE FROM tugas_kelas WHERE id =  ?', [id], callback);
  },
};

module.exports = Tugas;
