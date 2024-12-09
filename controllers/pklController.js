const PKL = require('../models/pklModels');

const PKLController = {
  getAll: (req, res) => {
    PKL.getAll((err, result) => {
      if (err) return res.status(500).json(err);
      res.json({
        message: 'Success Get Data',
        data: result,
        status: 200,
      });
    });
  },
  getByGuruId: (req, res) => {
    const { guruId } = req.params;
    PKL.getByGuruId(guruId, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({
        message: 'Success Get Data',
        data: result,
        status: 200,
      });
    });
  },
  getBySiswaId: (req, res) => {
    const { siswaId } = req.params;
    PKL.getBysiswaId(siswaId, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({
        message: 'Success Get Data',
        data: result,
        status: 200,
      });
    });
  },
  addPKL: (req, res) => {
    const data = req.body;
    PKL.addPKL(data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        message: 'Success Add Data',
        data: result,
        status: 201,
      });
    });
  },
  updatePKL: (req, res) => {
    const { id } = req.params;
    const data = req.body;
    PKL.updatePKL(id, data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        message: 'Success Update Data',
        data: result,
        status: 201,
      });
    });
  },
  deletePKL: (req, res) => {
    const { id } = req.params;
    PKL.deletePKL(id, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        message: 'Success Delete Data',
        data: result,
        status: 201,
      });
    });
  },
};

module.exports = PKLController;
