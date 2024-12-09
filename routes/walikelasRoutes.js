const express = require('express');
const GuruController = require('../controllers/guruController');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/checkRole');

router.post('/', GuruController.createWalikelas);
router.put('/:id', GuruController.UpdateWalikelas);
router.get('/getAll', GuruController.getWalikelas);
router.get('/getByGuruId/:guruId', GuruController.getWalikelasByGuruId);
router.get('/getByKelasId/:kelasId', GuruController.getWalikelasByKelasId);
router.get('/getWakaKesiswaan', GuruController.getWakaKesiswaan);
router.delete('/:id', GuruController.deleteWalikelas);
module.exports = router;
