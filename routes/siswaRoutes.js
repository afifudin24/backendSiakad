const express = require('express');
const SiswaController = require('../controllers/siswaController');
const router = express.Router();
const { uploadImages, uploadPDFs } = require('../middleware/multerConfig');
const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, SiswaController.getAllSiswa);
router.get('/getByuserId/:userId', SiswaController.getSiswaById);
router.get('/getByKelasId/:kelasId', SiswaController.getSiswaByKelasId);
router.get('/getAdminSiswa', SiswaController.adminSiswa);
router.post('/', uploadImages.single('gambar'), SiswaController.createSiswa);
// router.put('/:userId',SiswaController.updateSiswa);
router.post('/insertAdminKelas', SiswaController.insertAdminKelas);
router.put(
  '/updateSiswa/:userId',
  uploadImages.single('gambar'),
  SiswaController.updateSiswa,
);
router.put('/updateAdminKelas', SiswaController.updateAdminKelas);
router.delete('/deleteSiswa/:userId', SiswaController.deleteSiswa);
router.delete('/deleteAdminKelas/:kelasId', SiswaController.deleteAdminKelas);

module.exports = router;
