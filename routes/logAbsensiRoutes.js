const express = require('express');
const router = express.Router();
const LogAbsensiController = require('../controllers/logAbsensiController');
const LogAbsensi = require('../models/logAbsensiModels');

router.get(
  '/getByMengajarIdMonth/:mengajarId/:month',
  LogAbsensiController.getByMengajarIdMonth,
);
router.get(
  '/getByMengajarIdDate/:mengajarId/:date',
  LogAbsensiController.getByMengajarIdDate,
);

router.post('/', LogAbsensiController.insertAbsensi);
router.put('/', LogAbsensiController.updateAbsensi);
module.exports = router;
