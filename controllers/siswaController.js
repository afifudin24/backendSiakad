const Siswa = require('../models/siswaModel');
const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const SiswaController = {
  getAllSiswa: (req, res) => {
    Siswa.getAll((err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    });
  },

  getSiswaById: (req, res) => {
    const { userId } = req.params;
    Siswa.getById(userId, (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length === 0)
        return res.status(404).json({ message: 'Siswa not found' });
      res.json(results[0]);
    });
  },

  getSiswaByKelasId: (req, res) => {
    const { kelasId } = req.params;
    console.log(kelasId);
    Siswa.getByKelasId(kelasId, (err, results) => {
      console.log(results);
      if (err) return res.status(500).json(err);
      if (results.length === 0)
        return res.status(404).json({ message: 'Siswa not found' });
      res.json(results);
    });
  },

  createSiswa: async (req, res) => {
    const data = req.body;

    try {
      const userId = Math.floor(100 + Math.random() * 900);
      const hashedPassword = await bcrypt.hash(data.tanggal_lahir, 10);

      const user = {
        id: userId,
        username: data.nis,
        password: hashedPassword,
        role: 3,
      };
      const siswaData = {
        ...data,
        user_id: userId, // Also use the same userId for the Siswa id
      };

      User.create(user, (err, result) => {
        if (err) return res.status(500).json(err);

        Siswa.create(siswaData, (err, result) => {
          if (err) return res.status(500).json(err);
          res.json({
            response: res.status,
            data: user,
            message: 'Siswa and User created successfully',
          });
        });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateSiswa: (req, res) => {
    const { userId } = req.params;
    const data = req.body;
    // Temukan data siswa yang ada, termasuk nama file gambar lama
    Siswa.getById(userId, (err, siswa) => {
      if (err) return res.status(500).json({ err: err });

      // Hapus gambar lama jika ada dan jika file gambar baru diupload
      if (siswa[0].gambar !== 'default.jpeg' && req.file) {
        const oldImagePath = path.join(
          __dirname,
          '../uploads',
          siswa[0].gambar,
        );

        fs.unlink(oldImagePath, (err) => {
          if (err) console.error('Failed to delete old image:', err);
        });
      }

      // Cek apakah ada file gambar yang diupload
      if (req.file) {
        data.gambar = req.file.filename; // Simpan nama file gambar yang diupload
      }
      console.log(data);

      Siswa.update(userId, data, (err, result) => {
        if (err)
          return res.status(500).json({
            data: data,
            err: err,
          });
        res.status(201).json({
          message: 'Siswa updated successfully',
          result: data,
          status: 201,
        });
      });
    });
  },

  deleteSiswa: (req, res) => {
    const { userId } = req.params;

    Siswa.delete(userId, (err, result) => {
      if (err) return res.status(500).json(err);
      User.delete(userId, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({
          message: 'Siswa deleted successfully',
          status: 200,
        });
      });
    });
  },
};

module.exports = SiswaController;
