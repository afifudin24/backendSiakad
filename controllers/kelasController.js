const Kelas = require('../models/kelasModel')
const KelasController = {
    getKelas: (req, res) => {
        Kelas.getKelas((err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        })
    },
    getKelasById: (req, res) => {
        const { kelasId } = req.params;
        console.log(kelasId);
        Kelas.getKelasById(kelasId, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        })
    },
    createKelas: (req, res) => {
        const data = req.body;
        Kelas.createKelas(data, (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(200).json({
                data: data,
                status: 200,
                message : "Class Successfully Added"
            })
        })
    },
    updateKelas: (req, res) => {
        const { kelasId } = req.params;
        const data = req.body;
        Kelas.updateKelas(kelasId, data, (err, result) => {
            if (err) return res.status(500).json(err);
            console.log(result);
            if (result.affectedRows > 0) {
                  res.status(200).json({
                data: data,
                status: 200,
                message : "Class Successfully Updated"
            })
            } else {
                res.status(500).json({
                    message : "Class Not Updated Because Not Found"
                })
            }
          
        })
    },
    deleteKelas: (req, res) => {
        const { kelasId } = req.params;
        Kelas.deletekelas(kelasId, (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.affectedRows > 0) {
                res.status(201).json({
                    status: 201,
                    message: "Class Successfully Deleted"
                });
            } else {
                res.status(500).json({
                    status: 500,
                    message : "Class Not Deleted"
                })
            }
        })
    }
}

module.exports = KelasController;
