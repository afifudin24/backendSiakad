const express = require('express');
const router = express.Router();
const { uploadImages, uploadPDFs } = require('../middleware/multerConfig');
const PengirimanTugasController = require('../controllers/pengirimanTugasController');
router.get('/', PengirimanTugasController.getAll);
router.post('/', uploadPDFs.single('file'), PengirimanTugasController.create);
router.put('/:id', uploadPDFs.single('file'), PengirimanTugasController.update);
router.delete('/:id', PengirimanTugasController.delete);
module.exports = router;
