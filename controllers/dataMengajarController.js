const db = require('../db/config');
const DataMengajar = require('../models/dataMengajarModel');

const DataMengajarController = {
  getDataMengajar: (req, res) => {
    try {
      DataMengajar.getDataMengajar((err, result) => {
        if (err) return res.status(500).json(err);
        const formattedResults = result.map((row) => ({
          id: row.datamengajar_id,
          guru: {
            id: row.guru_id,
            nama: row.guru_nama,
          },
          kelas: {
            id: row.kelas_id,
            nama: row.kelas_nama,
            tingkat: row.kelas_tingkat,
          },
          mapel: {
            id: row.mapel_id,
            nama: row.mapel_nama,
          },
        }));

        // Kirim hasil dalam format JSON
        res.status(200).json({
          status: 200,
          data: formattedResults,
          message: 'Successfully Get Data',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getDataMengajarById: (req, res) => {
    const { id } = req.params;
    try {
      DataMengajar.getDataMengajarById(id, (err, result) => {
        if (err) return res.status(500).json(err);
        const formattedResults = result.map((row) => ({
          id: row.datamengajar_id,
          guru: {
            id: row.guru_id,
            nama: row.guru_nama,
          },
          kelas: {
            id: row.kelas_id,
            nama: row.kelas_nama,
            tingkat: row.kelas_tingkat,
          },
          mapel: {
            id: row.mapel_id,
            nama: row.mapel_nama,
          },
        }));

        // Kirim hasil dalam format JSON
        res.status(200).json({
          status: 200,
          data: formattedResults[0],
          message: 'Successfully Get Data',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getDataMengajarByGuruId: (req, res) => {
    const { guruId } = req.params;
    try {
      DataMengajar.getDataMengajarByGuruId(guruId, (err, result) => {
        console.log(result);
        if (err) return res.status(500).json(err);
        const formattedResults = result.map((row) => ({
          id: row.datamengajar_id,
          guru: {
            id: row.guru_id,
            nama: row.guru_nama,
          },
          kelas: {
            id: row.kelas_id,
            nama: row.kelas_nama,
            tingkat: row.kelas_tingkat,
          },
          mapel: {
            id: row.mapel_id,
            nama: row.mapel_nama,
          },
        }));

        // Kirim hasil dalam format JSON
        res.status(200).json({
          status: 200,
          data: formattedResults,
          message: 'Successfully Get Data',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  createDataMengajar: (req, res) => {
    const { guru_id, mapel_id, kelas_id } = req.body;
    const checkQuery = `
        SELECT * FROM datamengajar 
        WHERE kelas_id = ? AND guru_id = ? AND mapel_id = ?;
    `;
    db.query(checkQuery, [kelas_id, guru_id, mapel_id], (err, results) => {
      if (err) return res.status(500).json(err);
      if (results.length > 0) {
        return res.status(400).json({
          status: 400,
          message: 'Data Mengajar Already Exists',
          existingData: results,
        });
      } else {
        const data = req.body;
        try {
          DataMengajar.create(data, (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({
              status: 201,
              data: data,
              message: 'Successfully Added Data Mengajar',
            });
          });
        } catch (err) {
          return res.status(500).json(err);
        }
      }
    });
  },
  updateDataMengajar: (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      DataMengajar.update(id, data, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({
          status: 201,
          data: data,
          message: 'Successfully Updated Data Mengajar',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  deleteDataMengajar: (req, res) => {
    const { id } = req.params;
    try {
      DataMengajar.delete(id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({
          status: 201,
          message: 'Successfully Deleted Data Mengajar',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = DataMengajarController;
