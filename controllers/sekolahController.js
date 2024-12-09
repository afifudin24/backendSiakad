const Sekolah = require('../models/sekolahModel');
const SekolahController = {
  getData: (req, res) => {
    Sekolah.getData((err, result) => {
      if (err) return res.status(500).json(err);
      console.log(result);
      res.json({
        status: 200,
        data: result,
        message: 'Success Get Data',
      });
    });
  },
  insertData: (req, res) => {
    const data = req.body;
    Sekolah.insertData(data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        status: 201,
        data: result,
        message: 'Success Insert Data',
      });
    });
  },
  updateData: (req, res) => {
    const data = req.body;
    console.log('ini', data);
    Sekolah.updateData(data, (err, result) => {
      if (err) return res.status(500).json(err);

      res.status(201).json({
        status: 201,
        data: result,
        message: 'Success Update Data',
      });
    });
  },
};

module.exports = SekolahController;
