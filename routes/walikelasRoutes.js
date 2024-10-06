const express = require('express');
const GuruController = require('../controllers/guruController');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/checkRole');

router.get('/getAll', GuruController.getWalikelas);
router.get('/getByGuruId/:guruId', GuruController.getWalikelasByGuruId);
router.post('/', GuruController.createWalikelas);
module.exports = router;
