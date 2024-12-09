const Dudi = require('../models/dudiModels');

const DudiController = {
    getAllDudi : (req, res) => {
        Dudi.getAllDudi((err, result) => {
            if(err) return res.status(500).json(err);
            res.json({
                message : "Success Get Data",
                data : result,
                status : 200
            });
        })
    },
    getDudiByJurusan : (req, res) => {
        const {jurusan} = req.params;
        Dudi.getDudiByJurusan(jurusan, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({
                message : "Success Get Data",
                data : result,
                status : 200
            })
        })
    },
    addDudi : (req, res) => {
        const data = req.body;
        Dudi.addDudi(data, (err, result) => {
            if(err) return res.status(500).json(err);
            res.json({
                message : "Success Add Data",
                status : 201,
                data : data
            })
        })
    },
    updateDudi : (req, res) => {
        const {dudiId} = req.params;
        const data = req.body;
        Dudi.updateDudi(dudiId, data, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({
                message : "Success Update Data",
                status : 201,
                data : data
            })
        } )
    },
    deleteDudi : (req, res) => {
        const {dudiId } = req.params;
        Dudi.deleteDudi(dudiId, (err, result) => {
            if(err)return res.status(500).json(err);
            res.json({
                message : "Success Delete Data",
                data : result,
                status : 201
            })
        })
    }
}

module.exports = DudiController;