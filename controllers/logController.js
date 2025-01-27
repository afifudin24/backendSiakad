const Log = require('../models/logModel')
const LogController = {
  getLog: async (req, res) => {
    Log.getLog((err, result) => {
      if (err) return res.status(500).json(err)
      res.json({
        data: result,
        status: 200,
        message: 'Success Get Data'
      })
    })
  }
}

module.exports = LogController
