const LogAbsensi = require('../models/logAbsensiModels');

const LogAbsensiController = {
  getByMengajarIdMonth: (req, res) => {
    const { mengajarId, month } = req.params;
    LogAbsensi.getByMengajarIdMonth(mengajarId, month, (err, result) => {
      if (err) return res.status(500).json(err);
      const formattedResults = result.reduce((acc, row) => {
        // Cari apakah siswa sudah ada dalam array hasil
        let siswaIndex = acc.findIndex(
          (item) => item.siswa_id === row.siswa_id,
        );

        // Jika siswa belum ada, tambahkan objek baru untuk siswa tersebut
        if (siswaIndex === -1) {
          // Buat objek baru untuk siswa
          const newSiswa = {
            siswa_id: row.siswa_id,
            nama_siswa: row.nama_siswa,
            dataAbsen: [
              {
                logabsensi_id: row.logabsensi_id,
                tgl_absen: row.tgl_absen,
                pertemuan_ke: row.pertemuan_ke,
                status_absensi: row.status_absensi,
                mengajar_id: row.mengajar_id,
                nama_mapel: row.nama_mapel,
                nama_kelas: row.nama_kelas,
                tingkat_kelas: row.tingkat_kelas,
                guru: {
                  guru_id: row.guru_id,
                  nama_guru: row.nama_guru,
                },
              },
            ],
            absenCount: {
              H: 0,
              I: 0,
              S: 0,
              A: 0,
            },
          };

          // Increment jumlah sesuai dengan status_absensi
          newSiswa.absenCount[row.status_absensi] += 1;

          // Tambahkan siswa baru ke array
          acc.push(newSiswa);
        } else {
          // Jika siswa sudah ada, tambahkan data absensi ke dalam array dataAbsen siswa tersebut
          acc[siswaIndex].dataAbsen.push({
            logabsensi_id: row.logabsensi_id,
            tgl_absen: row.tgl_absen,
            pertemuan_ke: row.pertemuan_ke,
            status_absensi: row.status_absensi,
            mengajar_id: row.mengajar_id,
            nama_mapel: row.nama_mapel,
            nama_kelas: row.nama_kelas,
            tingkat_kelas: row.tingkat_kelas,
            guru: {
              guru_id: row.guru_id,
              nama_guru: row.nama_guru,
            },
          });
          // Increment jumlah sesuai dengan status_absensi
          acc[siswaIndex].absenCount[row.status_absensi] += 1;
        }

        return acc;
      }, []);

      res.json({
        message: 'Success Get Data',
        status: 200,
        data: formattedResults,
      });
    });
  },

  getByMengajarIdDate: (req, res) => {
    const { mengajarId, date } = req.params;
    LogAbsensi.getByMengajarIdDate(mengajarId, date, (err, result) => {
      if (err) return res.status(500).json(err);
      const formattedResults = result.reduce((acc, row) => {
        // Cari apakah siswa sudah ada dalam array hasil
        let siswaIndex = acc.findIndex(
          (item) => item.siswa_id === row.siswa_id,
        );

        // Jika siswa belum ada, tambahkan objek baru untuk siswa tersebut
        if (siswaIndex === -1) {
          // Buat objek baru untuk siswa
          const newSiswa = {
            siswa_id: row.siswa_id,
            nama_siswa: row.nama_siswa,
            dataAbsen: [
              {
                logabsensi_id: row.logabsensi_id,
                tgl_absen: row.tgl_absen,
                pertemuan_ke: row.pertemuan_ke,
                status_absensi: row.status_absensi,
                mengajar_id: row.mengajar_id,
                nama_mapel: row.nama_mapel,
                nama_kelas: row.nama_kelas,
                tingkat_kelas: row.tingkat_kelas,
                guru: {
                  guru_id: row.guru_id,
                  nama_guru: row.nama_guru,
                },
              },
            ],
          };

          // Tambahkan siswa baru ke array
          acc.push(newSiswa);
        } else {
          // Jika siswa sudah ada, tambahkan data absensi ke dalam array dataAbsen siswa tersebut
          acc[siswaIndex].dataAbsen.push({
            logabsensi_id: row.logabsensi_id,
            tgl_absen: row.tgl_absen,
            pertemuan_ke: row.pertemuan_ke,
            status_absensi: row.status_absensi,
            mengajar_id: row.mengajar_id,
            nama_mapel: row.nama_mapel,
            nama_kelas: row.nama_kelas,
            tingkat_kelas: row.tingkat_kelas,
            guru: {
              guru_id: row.guru_id,
              nama_guru: row.nama_guru,
            },
          });
        }

        return acc;
      }, []);

      res.json({
        message: 'Success Get Data',
        status: 200,
        data: formattedResults,
      });
    });
  },
  insertAbsensi: (req, res) => {
    const data = req.body;
    LogAbsensi.insertAbsensi(data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        status: 201,
        message: 'Success Insert Absen',
        data: data,
      });
    });
  },
  updateAbsensi: (req, res) => {
    const data = req.body;

    LogAbsensi.updateAbsensi(data, (err, result) => {
      console.log(result);
      if (err) return res.status(500).json(err);
      res.status(201).json({
        status: 201,
        message: 'Success Update Data',
        data: data,
      });
    });
  },
};

module.exports = LogAbsensiController;
