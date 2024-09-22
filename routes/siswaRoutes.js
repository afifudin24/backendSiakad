const express = require('express');
const SiswaController = require('../controllers/siswaController');
const router = express.Router();
const { uploadImages, uploadPDFs } = require('../middleware/multerConfig');
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, SiswaController.getAllSiswa);
router.get('/:userId', SiswaController.getSiswaById);
router.post('/', SiswaController.createSiswa);
// router.put('/:userId',SiswaController.updateSiswa);
router.put(
  '/:userId',
  uploadImages.single('gambar'),
  SiswaController.updateSiswa,
);
router.delete('/:userId', SiswaController.deleteSiswa);

module.exports = router;
