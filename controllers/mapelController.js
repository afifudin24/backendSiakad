const Mapel = require('../models/mapelModels');

const mapelController = {
  getMapel: (req, res) => {
    Mapel.getMapel((err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json({
        data: result,
        message: 'Successfully Get Mapel',
      });
    });
  },
  getMapelById: (req, res) => {
    const { id } = req.params;
    Mapel.getMapelById(id, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json({
        data: result,
        status: 200,
        message: 'Successfully Get Mapel By Id',
      });
    });
  },
  createMapel: (req, res) => {
    const data = req.body;
    Mapel.createMapel(data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        data: result,
        status: 200,
        message: 'Successfully Created Mapel',
      });
    });
  },
  updateMapel: (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Mapel.updateMapel(id, data, (err, result) => {
      if (err) return res.status(500), json(err);
      res.status(201).json({
        data: data,
        result: result,
        status: 201,
        message: 'Successfully Updated Mapel',
      });
    });
  },
  deleteMapel: (req, res) => {
    const { id } = req.params;
    Mapel.deleteMapel(id, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        result: result,
        status: 201,
        message: 'Successfully Deleted Mapel',
      });
    });
  },
};

module.exports = mapelController;
