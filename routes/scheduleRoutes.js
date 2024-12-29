const express = require('express')
const router = express.Router()
const scheduleController = require('../controllers/scheduleController') // Pastikan path sesuai struktur proyek Anda

// Route untuk generate schedule
router.get('/generate', scheduleController.generateSchedule)

module.exports = router
