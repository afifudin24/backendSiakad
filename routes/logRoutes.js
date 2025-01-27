const express = require('express')
const router = express.Router()
const LogController = require('../controllers/logController')

router.get('/getLog', LogController.getLog)

module.exports = router
