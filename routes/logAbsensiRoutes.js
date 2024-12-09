const express = require('express');
const router = express.Router();
const LogAbsensiController = require('../controllers/logAbsensiController');

router.get(
  '/getlastabsensi/:mengajarId/:date',
  LogAbsensiController.getLastAbsensi
);
router.get(
  '/getByMengajarIdMonth/:mengajarId/:month',
  LogAbsensiController.getByMengajarIdMonth
);
router.get(
  '/getByMengajarIdDate/:mengajarId/:date',
  LogAbsensiController.getByMengajarIdDate
);
router.get(
  '/getByMengajarIdSiswaDate/:mengajarId/:date/:siswaId',
  LogAbsensiController.getByMengajarIdSiswaDate
);

router.post('/', LogAbsensiController.insertAbsensi);
router.put('/update', LogAbsensiController.updateAbsensi);

module.exports = router;
