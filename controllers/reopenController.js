const ReopenJurnal = require('../models/reopenJurnalModel')

const ReopenJurnalController = {
  getDataAll: (req, res) => {
    ReopenJurnal.getData((err, result) => {
      if (err) return res.status(500).json(err)
      res.status(200).json({
        status: 200,
        message: 'Data berhasil diambil',
        data: result
      })
    })
  },
  getDataByGuruId: (req, res) => {
    const guruId = req.params.guruId
    ReopenJurnal.getDataByGuruId(guruId, (err, result) => {
      if (err) return res.status(500).json(err)
      console.log(result)
      res.json({
        status: 201,
        message: 'Sukses Get Data',
        data: result
      })
    })
  },
  insertData: (req, res) => {
    const data = req.body
    ReopenJurnal.insertData(data, (err, result) => {
      if (err) return res.status(500).json(err)
      res.json({
        status: 201,
        message: 'Sukses Melakukan Ajuan'
      })
    })
  },
  updateData: (req, res) => {
    const data = req.body
    const id = req.params.id
    ReopenJurnal.updateData(id, data, (err, result) => {
      if (err) return res.status(500).json(err)
      res.json({
        status: 201,
        message: 'Sukses Mengupdate Data'
      })
    })
  },
  deleteData: (req, res) => {
    const id = req.params.id
    ReopenJurnal.deleteData(id, (err, result) => {
      if (err) return res.status(500).json(err)
      res.json({
        status: 200,
        message: 'Sukses Menghapus Data'
      })
    })
  }
}

module.exports = ReopenJurnalController
