const bcrypt = require('bcryptjs');
const StafPembayaran = require("../models/stafPembayaranModels");
const User = require('../models/userModels');
const fs = require('fs');
const path = require('path');
const StafPembayaranController = {
    getStafPembayaran: (req, res) => {
        try {
            StafPembayaran.getStafPembayaran((err, result) => {
                if (err) return res.status(500).json(err);
                res.status(200).json({
                    status: 200,
                    data: result,
                    message : "Successfully Get Staf Pembayaran"
                })
            })
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    getStafPembayaranById: (req, res) => {
        const { id } = req.params;
        try {
            StafPembayaran.getStafPembayaranById(id, (err, result) => {
                if (err) return res.status(500).json(err);
                res.status(200).json({

                })
            })
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    createStafPembayaran: async (req, res) => {
        const data = req.body;
        console.log(data);
        try {
            const userId = Math.floor(100 + Math.random() * 900);
            const hashedPassword = await bcrypt.hash(data.tanggal_lahir, 10);

            const user = {
                id : userId,
                username: data.email,
                password: hashedPassword,
                role: 4
            };
            const stafData = {
        ...data,
        user_id: userId // Also use the same userId for the Siswa id
    };

            User.create(user, (err, result) => {
                if (err) return res.status(500).json(err);

                StafPembayaran.createStafPembayaran(stafData, (err, result) => {
                    if (err) return res.status(500).json(err);
                    res.json({
                        response : res.status,
                        data : user,
                        message: 'Siswa and User created successfully'
                    });
                });
            });
        } catch (err) {
            console.log(err);
          return  res.status(500).json(err);
        }
    },
    updateStafPembayaran: (req, res) => {
        const { id } = req.params;
        const data = req.body;
        console.log(req.file);
        try {
            StafPembayaran.getStafPembayaranById(id, (err, staf) => {
                if (err) return res.status(200).json(err);
                  // Hapus gambar lama jika ada dan jika file gambar baru diupload
            if (staf[0].gambar !== 'default.jpg' && req.file) {
                const oldImagePath = path.join(__dirname, '../uploads', staf[0].gambar);
                fs.unlink(oldImagePath, (err) => {
                    if (err) console.error('Failed to delete old image:', err);
                });
            }
        
            // Cek apakah ada file gambar yang diupload
            if (req.file) {
                data.gambar = req.file.filename;  // Simpan nama file gambar yang diupload
                }
                    StafPembayaran.updateStafPembayaran(id, data, (err, result) => {
                if (err) return res.status(500).json(err);
                res.status(201).json({
                    status: 201,
                    message: "Successfully Updated Staf Pembayaran"
                });
            })
            })
        
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    deleteStafPembayaran: (req, res) => {
        const { id } = req.params;
        try {
            StafPembayaran.deleteStafPembayaran(id, (err, result) => {
                if (err) return res.status(500).json(err);
                res.status(201).json({
                    status: 201,
                    message: "Successfully Deleted Staf Pembayaran"
                });
            })
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = StafPembayaranController;