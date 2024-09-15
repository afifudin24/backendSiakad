const express = require('express');
const GuruController = require('../controllers/guruController');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/checkRole');

// router.get('/',verifyToken, checkRole([2, 3]),  GuruController.getAllGuru);
// router.get('/:user_id', verifyToken, checkRole([2]), GuruController.getGuruById);
router.get('/',  GuruController.getAllGuru);
router.get('/:user_id/', GuruController.getGuruById);
router.post('/', GuruController.createGuru);
router.put('/:id', GuruController.updateGuru);
router.delete('/:id', GuruController.deleteGuru);
router.get('/walikelas', GuruController.getWalikelas);

module.exports = router;
