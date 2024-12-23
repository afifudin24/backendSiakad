const express = require('express');
const router = express.Router();
const EjurnalController = require('../controllers/ejurnalController');
router.get('/getByJurnalId/:jurnalId', EjurnalController.getByJurnalId);
router.get('/getByGuruId/:idGuru', EjurnalController.getByGuruId);
router.get(
  '/getBymengajarIddate/:mengajarId/:date',
  EjurnalController.getBymengajarIdDate,
);
router.get(
  '/getBymengajarIdmonth/:mengajarId/:month/:year',
  EjurnalController.getBymengajarIdMonth,
);
router.get('/getByGuruIdDate/:guruId/:date', EjurnalController.getByGuruIdDate);
router.get(
  '/getByGuruId7LastDays/:guruId',
  EjurnalController.getByGuruIdLast7Days,
);
router.get(
  '/getByKelasId7LastDays/:kelasId',
  EjurnalController.getByKelasIdLast7Days,
);
router.get(
  '/getByKelasIdDate/:kelasId/:date',
  EjurnalController.getByKelasIdDate,
);
router.get(
  '/getByKelasIdMonth/:kelasId/:month',
  EjurnalController.getByKelasIdMonth,
);
router.get(
  '/getByJadwalMengajar/:guruId/:tanggal/:hari',
  EjurnalController.getByJadwalMengajar,
);
router.get('/totalCount/:guruId', EjurnalController.countTotal);
router.post('/', EjurnalController.createEjurnal);
router.put('/:id', EjurnalController.updateJurnal);
module.exports = router;
