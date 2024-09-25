const express = require('express');
const router = express.Router();
const LogAbsensiWalkelController = require('../controllers/logAbsensiWalkelController');

router.get('/getByKelas/:kelasId', LogAbsensiWalkelController.getByKelas);
router.get('/getByKelasDate/:kelasId/:date', LogAbsensiWalkelController.getByKelasIdDate);
router.get('/getByKelasMonth/:kelasId/:month', LogAbsensiWalkelController.getByKelasIdMonth);
router.post('/insert', LogAbsensiWalkelController.create);
router.put('/update/:date', LogAbsensiWalkelController.update);
module.exports = router;