const fs = require('fs');
const path = require('path');

const PengirimanTugas = require('../models/pengirimanTugasModels');

const PengirimanTugasController = {
  getAll: (req, res) => {
    PengirimanTugas.getAll((err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json({
        status: 200,
        message: 'Success Get Data',
        data: result,
      });
    });
  },
  getBySiswa: (req, res) => {
    const { idSiswa } = req.params;
    PengirimanTugas.getBySiswa(idSiswa, (err, result) => {
      if (err) return res.status(500).json(err);
      const formattedResults = result.map((row) => ({
        id: row.pengiriman_id,
        tugasId: row.tugas_id,
        siswa: {
          id: row.siswa_id,
          nama: row.nama_siswa,
          kelasId: row.kelas_id,
          kelasNama: row.nama_kelas,
        },
        tanggalPengumpulan: row.tanggal_pengumpulan,
        file: row.file,
        status: row.status_pengiriman,
        tugas: {
          id: row.tugas_id,
          judul: row.judul_tugas,
          deskripsi: row.deskripsi,
          tanggalDibuat: row.tanggal_dibuat,
          tanggalDeadline: row.tanggal_deadline,
        },
        mapel: {
          id: row.mapel_id,
          nama: row.nama_mapel,
        },
        guru: {
          id: row.guru_id,
          nama: row.nama_guru,
        },
      }));

      res.status(200).json({
        data: formattedResults,
        status: 200,
        message: 'Successfully Get Pengiriman Tugas',
      });
    });
  },
  create: (req, res) => {
    const data = req.body;
    console.log(req.file);
    if (req.file) {
      data.file = req.file.filename; // Simpan nama file
    }
    PengirimanTugas.create(data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        status: 201,
        message: 'Success Send Answer',
        data: data,
      });
    });
  },
  update: (req, res) => {
    const { id } = req.params;
    const data = req.body;
    PengirimanTugas.getById(id, (err, result) => {
      if (err) return res.status(500).json(err); // Hapus gambar lama jika ada dan jika file gambar baru diupload
      if (result[0].file !== '' && req.file) {
        const oldFilePath = path.join(
          __dirname,
          '../uploads/pdfs',
          result[0].file,
        );
        fs.unlink(oldFilePath, (err) => {
          if (err) console.error('Failed to delete old image:', err);
        });
      }
      // Cek apakah ada file gambar yang diupload
      if (req.file) {
        data.file = req.file.filename; // Simpan nama file gambar yang diupload
      }
      console.log(data);
      PengirimanTugas.update(id, data, (err, result) => {
        res.status(201).json({
          message: 'Success Updated Data',
          status: 201,
          data: data,
        });
      });
    });
  },
  delete: (req, res) => {
    const { id } = req.params;
    PengirimanTugas.getById(id, (err, result) => {
      if (err) return res.status(500).json(err); // Hapus gambar lama jika ada dan jika file gambar baru diupload
      if (result[0].file !== '') {
        const oldFilePath = path.join(
          __dirname,
          '../uploads/pdfs',
          result[0].file,
        );
        fs.unlink(oldFilePath, (err) => {
          if (err) console.error('Failed to delete old image:', err);
        });
      }

      PengirimanTugas.delete(id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({
          status: 200,
          message: 'Delete Success',
          data: result,
        });
      });
    });
  },
};

module.exports = PengirimanTugasController;
