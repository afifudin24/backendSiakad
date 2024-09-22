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
            if (results.length === 0) return res.status(404).json({ message: 'Guru not found' });
            res.json(results[0]);
        });
    },

    createGuru: async (req, res) => {
        const data = req.body;

        try {
            const userId = Math.floor(10000 + Math.random() * 90000);
            const hashedPassword = await bcrypt.hash(data.tanggal_lahir, 10);

            const user = {
                id  : userId,
                username: data.email,
                password: hashedPassword,
                role: 2 // Assuming role 2 is for Guru
            };

            const guruData = {
                ...data,
                user_id: userId
            };

            User.create(user, (err, result) => {
                if (err) return res.status(500).json(err);

                Guru.create(guruData, (err, result) => {
                    if (err) return res.status(500).json(err);
                    res.json({
                        response : 200,
                        data: user,
                        
                        message: 'Guru and User created successfully'
                    });
                });
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updateGuru: (req, res) => {
        const { id } = req.params;
        const data = req.body;
        console.log(req.file);
            // Temukan data siswa yang ada, termasuk nama file gambar lama
        Guru.getById(id, (err, guru) => {
            if (err) return res.status(500).json({ err: err });
            // Hapus gambar lama jika ada dan jika file gambar baru diupload
     
            if (guru[0].gambar !== 'default.jpeg' && req.file) {
                const oldImagePath = path.join(__dirname, '../uploads', guru[0].gambar);
                fs.unlink(oldImagePath, (err) => {
                    if (err) console.error('Failed to delete old image:', err);
                });
            }
            // Cek apakah ada file gambar yang diupload
            if (req.file) {
                data.gambar = req.file.filename;  // Simpan nama file gambar yang diupload
            }
            console.log(data);
        
            Guru.update(id, data, (err, result) => {
                if (err) return res.status(500).json({
                    data: data,
                    err: err
                });
                res.status(201).json(
                    {
                        result: result,
                        status : 201,
                        message: 'Guru updated successfully'
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
            })
        });
    },
    getWalikelas: (req, res) => {
        Guru.getWalikelas((err, result) => {
            if (err) return res.status(500).json(err);
            console.log(result);
             const formattedResults = result.map(row => ({
            id: row.walikelas_id,
            guru: {
                id: row.guru_id,
                nama: row.guru_nama
            },
            kelas: {
                id: row.kelas_id,
                nama: row.kelas_nama
            }
             }));
             // Kirim hasil JSON
        res.json(formattedResults);
       })

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
                existingData: results
            });
            } else {
                    const data = req.body;
        Guru.createWalikelas(data, (err, result) => {
            console.log(result);
            if (result.affectedRows > 0) {
                res.status(200).json({
                    data: data,
                    status : 200,
                    message : "Walikelas Added"
                })
            } else {
                res.status(400).json({
                    data: data,
                    status: 400,
                    message : "Walikelas Not Added"
                })
            }
        })
           }
        });
        

    }
};

module.exports = GuruController;
