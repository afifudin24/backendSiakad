const Tugas = require('../models/tugasModel');

const TugasController = {
  getTugas: (req, res) => {
    Tugas.getAllTugas((err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json({
        status: 200,
        message: 'Success Get Data',
        data: result,
      });
    });
  },
  getTugasByKelas: (req, res) => {
    const { idKelas } = req.params;
    console.log(idKelas);
    Tugas.getTugasByKelas(idKelas, (err, result) => {
      //   console.log(result);
      const formattedResults = result.map((row) => ({
        id: row.tugas_id,
        judul_tugas: row.judul_tugas,
        deskripsi: row.deskripsi,
        tanggal_dibuat: row.tanggal_dibuat,
        tanggal_deadline: row.tanggal_deadline,
        guru: {
          id: row.guru_id,
          nama: row.nama,
        },
        kelas: {
          id: row.kelas_id,
          nama: row.title_kelas,
          tingkat: row.tingkat_kelas,
        },
        mapel: {
          id: row.mapel_id,
          nama: row.namaMapel,
        },
      }));
      if (err) return res.status(500).json(err);
      res.status(200).json({
        status: 200,
        message: 'Success Get Data',
        data: formattedResults,
      });
    });
  },
  getTugasByKelasSiswa: (req, res) => {
    const { idKelas, idSiswa } = req.params;
    console.log(idKelas);
    Tugas.getTugasByKelasSiswa(idKelas, idSiswa, (err, result) => {
      console.log(err);
      console.log(result);
      const formattedResults = result.map((row) => ({
        id: row.tugas_id,
        judul_tugas: row.judul_tugas,
        deskripsi_tugas: row.deskripsi_tugas,
        tanggal_dibuat: row.tugas_tanggal_dibuat,
        tangal_deadline: row.tugas_tanggal_deadline,
        status_kirim: row.status_pengiriman,
        guru: {
          id: row.guru_id,
          nama: row.nama_guru,
        },
        kelas: {
          id: row.kelas_id,
          nama: row.nama_kelas,
          tingkat: row.tingkat_kelas,
        },
        mapel: {
          id: row.mapel_id,
          nama: row.nama_mapel,
        },
      }));
      if (err) return res.status(500).json(err);
      res.status(200).json({
        status: 200,
        message: 'Success Get Data',
        data: formattedResults,
      });
    });
  },
  getTugasByKelasMapelSiswa: (req, res) => {
    const { idKelas, idSiswa, idMapel } = req.params;
    console.log(idKelas);
    Tugas.getTugasByKelasMapelSiswa(
      idKelas,
      idSiswa,
      idMapel,
      (err, result) => {
        console.log(err);
        console.log(result);
        const formattedResults = result.map((row) => ({
          id: row.tugas_id,
          judul_tugas: row.judul_tugas,
          deskripsi_tugas: row.deskripsi_tugas,
          tanggal_dibuat: row.tugas_tanggal_dibuat,
          tangal_deadline: row.tugas_tanggal_deadline,
          status_kirim: row.status_pengiriman,
          guru: {
            id: row.guru_id,
            nama: row.nama_guru,
          },
          kelas: {
            id: row.kelas_id,
            nama: row.nama_kelas,
            tingkat: row.tingkat_kelas,
          },
          mapel: {
            id: row.mapel_id,
            nama: row.nama_mapel,
          },
        }));
        if (err) return res.status(500).json(err);
        res.status(200).json({
          status: 200,
          message: 'Success Get Data',
          data: formattedResults,
        });
      },
    );
  },
  createTugas: (req, res) => {
    const data = req.body;
    Tugas.createTugas(data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        status: 201,
        message: 'Success Post Data',
        data: result,
      });
    });
  },
  updateTugas: (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Tugas.updateTugas(id, data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        status: 201,
        message: 'Update Successfully',
        data: result,
      });
    });
  },
  deleteTugas: (req, res) => {
    const { id } = req.params;
    Tugas.deleteTugas(id, (err, result) => {
      if (err) res.status(500).json(err);
      res.status(201).json({
        status: 201,
        message: 'Delete Successfully',
        result: result,
      });
    });
  },
};

module.exports = TugasController;
