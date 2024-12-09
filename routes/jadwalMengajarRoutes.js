const express = require('express');
const JadwalMengajarController = require('../controllers/jadwalMengajarController');
const router = express.Router();

router.get('/', JadwalMengajarController.getJadwalMengajar);
router.get('/byId/:id', JadwalMengajarController.getJadwalMengajarById);
router.get('/byGuruId/:id', JadwalMengajarController.getJadwalMengajarByGuruId);
router.get(
  '/byKelasId/:id',
  JadwalMengajarController.getJadwalMengajarByKelasId,
);
router.get(
  '/byKelasIdHari/:id/:hari',
  JadwalMengajarController.getJadwalMengajarByKelasIdHari,
);
router.get(
  '/byGuruIdHari/:id/:hari',
  JadwalMengajarController.getJadwalMengajarByGuruIdHari,
);
router.get('/countTotal/:guruId', JadwalMengajarController.getTotalByGuruId);
router.post('/', JadwalMengajarController.createJadwalMengajar);
router.put('/:id', JadwalMengajarController.updateJadwalMengajar);
router.delete('/:id', JadwalMengajarController.deleteJadwalMengajar);
module.exports = router;
