const LogAbsensiWalkel = require('../models/logAbsensiWalkel');

const LogAbsensiWalkelController = {
  getByKelas: (req, res) => {
    console.log(req.params);
    const { kelasId } = req.params;
    LogAbsensiWalkel.getByKelas(kelasId, (err, result) => {
      if (err) return res.status(404).json(err);
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
                tgl_absen: row.tgl_absen,

                status_absen: row.status_absen,
                nama_kelas: row.nama_kelas,
                tingkat_kelas: row.tingkat_kelas,
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
          newSiswa.absenCount[row.status_absen] += 1;

          // Tambahkan siswa baru ke array
          acc.push(newSiswa);
        } else {
          // Jika siswa sudah ada, tambahkan data absensi ke dalam array dataAbsen siswa tersebut
          acc[siswaIndex].dataAbsen.push({
            tgl_absen: row.tgl_absen,

            status_absen: row.status_absen,
            nama_kelas: row.nama_kelas,
            tingkat_kelas: row.tingkat_kelas,
          });
          // Increment jumlah sesuai dengan status_absensi
          acc[siswaIndex].absenCount[row.status_absen] += 1;
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
  getByKelasIdDate: (req, res) => {
    const { kelasId, date } = req.params;
    LogAbsensiWalkel.getByKelasIdDate(kelasId, date, (err, result) => {
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
                tgl_absen: new Date(row.tgl_absen),
                status_absen: row.status_absen,
              },
            ],
          };

          // Tambahkan siswa baru ke array
          acc.push(newSiswa);
        } else {
          // Jika siswa sudah ada, tambahkan data absensi ke dalam array dataAbsen siswa tersebut
          acc[siswaIndex].dataAbsen.push({
            tgl_absen: new Date(row.tgl_absen),

            status_absen: row.status_absen,
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
  getByKelasIdMonth: (req, res) => {
    const { kelasId, month } = req.params;
    LogAbsensiWalkel.getByKelasIdMonth(kelasId, month, (err, result) => {
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
                tgl_absen: new Date(row.tgl_absen).toLocaleDateString('id-ID'),

                status_absen: row.status_absen,
                nama_kelas: row.nama_kelas,
                tingkat_kelas: row.tingkat_kelas,
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
          newSiswa.absenCount[row.status_absen] += 1;

          // Tambahkan siswa baru ke array
          acc.push(newSiswa);
        } else {
          // Jika siswa sudah ada, tambahkan data absensi ke dalam array dataAbsen siswa tersebut
          acc[siswaIndex].dataAbsen.push({
            tgl_absen: new Date(row.tgl_absen).toLocaleDateString('id-ID'),

            status_absen: row.status_absen,
            nama_kelas: row.nama_kelas,
            tingkat_kelas: row.tingkat_kelas,
          });
          // Increment jumlah sesuai dengan status_absensi
          acc[siswaIndex].absenCount[row.status_absen] += 1;
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
  getBySiswa: (req, res) => {
    const { siswaId, month } = req.params;
    LogAbsensiWalkel.getBySiswaIdMonth(siswaId, month, (err, result) => {
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
                tgl_absen: new Date(row.tgl_absen).toLocaleDateString('id-ID'),

                status_absen: row.status_absen,
                nama_kelas: row.nama_kelas,
                tingkat_kelas: row.tingkat_kelas,
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
          newSiswa.absenCount[row.status_absen] += 1;

          // Tambahkan siswa baru ke array
          acc.push(newSiswa);
        } else {
          // Jika siswa sudah ada, tambahkan data absensi ke dalam array dataAbsen siswa tersebut
          acc[siswaIndex].dataAbsen.push({
            tgl_absen: new Date(row.tgl_absen).toLocaleDateString('id-ID'),

            status_absen: row.status_absen,
            nama_kelas: row.nama_kelas,
            tingkat_kelas: row.tingkat_kelas,
          });
          // Increment jumlah sesuai dengan status_absensi
          acc[siswaIndex].absenCount[row.status_absen] += 1;
        }

        return acc;
      }, []);
      res.status(200).json({
        message: 'Success Get Data',
        status: 200,
        data: formattedResults,
      });
    });
  },
  create: (req, res) => {
    const data = req.body;
    LogAbsensiWalkel.createAbsensi(data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        status: 201,
        message: 'Success Insert Absen',
        data: data,
      });
    });
  },
  update: (req, res) => {
    const data = req.body;
    const { date } = req.params;
    console.log(data);
    LogAbsensiWalkel.updateAbsensi(data, date, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        message: 'Success Update Data',
        data: data,
      });
    });
  },
};

module.exports = LogAbsensiWalkelController;
