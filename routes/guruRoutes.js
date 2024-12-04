const express = require('express');
const GuruController = require('../controllers/guruController');
const router = express.Router();
const { uploadImages, uploadPDFs } = require('../middleware/multerConfig');
const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/checkRole');

// router.get('/',verifyToken, checkRole([2, 3]),  GuruController.getAllGuru);
// router.get('/:user_id', verifyToken, checkRole([2]), GuruController.getGuruById);
router.get('/', GuruController.getAllGuru);
router.get('/:user_id', GuruController.getGuruById);
router.post('/', uploadImages.single('gambar'), GuruController.createGuru);
router.post('/setWakakesiswaan', GuruController.setWakakesiswaan);
router.post('/setWakakurikulum', GuruController.setWakakurikulum);
router.put('/:id', uploadImages.single('gambar'), GuruController.updateGuru);
router.delete('/:id', GuruController.deleteGuru);

module.exports = router;
