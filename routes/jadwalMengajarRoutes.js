const express = require('express')
const JadwalMengajarController = require('../controllers/jadwalMengajarController')
const scheduleController = require('../controllers/scheduleController') // Pastikan path sesuai struktur proyek Anda
const router = express.Router()

router.get('/', JadwalMengajarController.getJadwalMengajar)
router.get('/byId/:id', JadwalMengajarController.getJadwalMengajarById)
router.get('/byGuruId/:id', JadwalMengajarController.getJadwalMengajarByGuruId)
router.get(
  '/byKelasId/:id',
  JadwalMengajarController.getJadwalMengajarByKelasId
)
router.get(
  '/byKelasIdHari/:id/:hari',
  JadwalMengajarController.getJadwalMengajarByKelasIdHari
)
router.get(
  '/byGuruIdHari/:id/:hari',
  JadwalMengajarController.getJadwalMengajarByGuruIdHari
)
router.get('/countTotal/:guruId', JadwalMengajarController.getTotalByGuruId)

// Route untuk generate schedule
router.get('/generate', scheduleController.generateSchedule)
router.post('/', JadwalMengajarController.createJadwalMengajar)
router.put('/:id', JadwalMengajarController.updateJadwalMengajar)
router.delete('/:id', JadwalMengajarController.deleteJadwalMengajar)
module.exports = router
