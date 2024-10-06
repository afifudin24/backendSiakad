const Guru = require('../models/guruModels');
const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const db = require('../db/config');
const fs = require('fs');
const path = require('path');

const GuruController = {
  getAllGuru: (req, res) => {
    Guru.getAll((err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    });
  },

  getGuruById: (req, res) => {
    const { user_id } = req.params;
    Guru.getById(user_id, (err, results) => {
      if (err) return res.status(500).json(err);

      if (results.length === 0)
        return res.status(404).json({ message: 'Guru not found' });
      const formattedResults = results.reduce((acc, row) => {
        const guruId = row.guruId;
        const existingGuru = acc.find((guru) => guru.id === guruId);

        if (existingGuru) {
          // Jika guru sudah ada, periksa apakah pklId sudah ada dalam array pkl
          const existingPkl = existingGuru.pkl.find(
            (pkl) => pkl.pklId === row.pklId,
          );
          if (!existingPkl) {
            // Jika pklId belum ada, tambahkan data pkl ke dalam array pkl
            existingGuru.pkl.push({
              pklId: row.pklId,
            });
          }
        } else {
          // Jika guru belum ada, buat objek guru baru dengan array pkl
          const newGuru = {
            id: guruId,
            nama: row.guru_nama,
            tanggalLahir: row.guru_tanggal_lahir,
            email: row.guru_email,
            userId: row.guru_userId,
            gambar: row.guru_gambar,
            alamat: row.guru_alamat,
            hobi: row.guru_hobi,
            noTelepon: row.guru_no_telepon,
            walikelas: {
              walikelasId: row.walikelasId,
            },
            pkl: [
              {
                pklId: row.pklId,
              },
            ],
          };
          acc.push(newGuru);
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

  createGuru: async (req, res) => {
    const data = req.body;

    try {
      const userId = Math.floor(10000 + Math.random() * 90000);
      const hashedPassword = await bcrypt.hash(data.tanggal_lahir, 10);

      const user = {
        id: userId,
        username: data.email,
        password: hashedPassword,
        role: 2, // Assuming role 2 is for Guru
      };

      const guruData = {
        ...data,
        user_id: userId,
      };

      User.create(user, (err, result) => {
        if (err) return res.status(500).json(err);

        Guru.create(guruData, (err, result) => {
          if (err) return res.status(500).json(err);
          res.json({
            response: 200,
            data: user,

            message: 'Guru and User created successfully',
          });
        });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateGuru: (req, res) => {
    const { id } = req.params;
    console.log(id);
    const data = req.body;
    console.log(req.body);
    console.log('file', req.file);
    // Temukan data siswa yang ada, termasuk nama file gambar lama
    Guru.getById(id, (err, guru) => {
      if (err) return res.status(500).json({ err: err });
      // Hapus gambar lama jika ada dan jika file gambar baru diupload
      console.log(guru[0].guru_gambar);
      if (guru[0].guru_gambar !== 'default.jpeg' && req.file) {
        const oldImagePath = path.join(
          __dirname,
          '../uploads',
          guru[0].guru_gambar,
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

      Guru.update(id, data, (err, result) => {
        if (err)
          return res.status(500).json({
            data: data,
            err: err,
          });
        res.status(201).json({
          result: data,
          status: 201,
          message: 'Guru updated successfully',
        });
      });
    });
  },

  deleteGuru: (req, res) => {
    const { id } = req.params;

    Guru.delete(id, (err, result) => {
      if (err) return res.status(500).json(err);
      console.log(result);
      User.delete(id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Guru deleted successfully' });
      });
    });
  },
  getWalikelas: (req, res) => {
    Guru.getWalikelas((err, result) => {
      if (err) return res.status(500).json(err);
      console.log(result);
      const formattedResults = result.map((row) => ({
        id: row.walikelas_id,
        guru: {
          id: row.guru_id,
          nama: row.guru_nama,
        },
        kelas: {
          id: row.kelas_id,
          nama: row.kelas_nama,
        },
      }));
      // Kirim hasil JSON
      res.json(formattedResults);
    });
  },
  getWalikelasByGuruId: (req, res) => {
    const { guruId } = req.params;
    Guru.getWalikelasByGuruId(guruId, (err, result) => {
      if (err) return res.status(500).json(err);
      console.log(result);
      const formattedResults = result.map((row) => ({
        id: row.walikelas_id,
        guru: {
          id: row.guru_id,
          nama: row.guru_nama,
        },
        kelas: {
          id: row.kelas_id,
          nama: row.kelas_nama,
        },
      }));
      // Kirim hasil JSON
      res.json(formattedResults);
    });
  },

  createWalikelas: (req, res) => {
    const { kelas_id, guru_id } = req.body;
    const checkQuery = `
        SELECT * FROM walikelas 
        WHERE kelas_id = ? OR guru_id = ?;
    `;
    db.query(checkQuery, [kelas_id, guru_id], (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length > 0) {
        return res.status(400).json({
          status: 400,
          message: 'Walikelas already exists',
          existingData: results,
        });
      } else {
        const data = req.body;
        Guru.createWalikelas(data, (err, result) => {
          console.log(result);
          if (result.affectedRows > 0) {
            res.status(200).json({
              data: data,
              status: 200,
              message: 'Walikelas Added',
            });
          } else {
            res.status(400).json({
              data: data,
              status: 400,
              message: 'Walikelas Not Added',
            });
          }
        });
      }
    });
  },
};

module.exports = GuruController;
