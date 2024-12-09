const express = require('express');
const router = express.Router();
const StafPembayaranController = require('../controllers/stafPembayaranController');
const { uploadImages, uploadPDFs } = require('../middleware/multerConfig');
const verifyToken = require('../middleware/verifyToken');
router.get('/', StafPembayaranController.getStafPembayaran);
router.get('/:id', StafPembayaranController.getStafPembayaranById);
router.post('/', StafPembayaranController.createStafPembayaran);
router.put(
  '/:id',
  uploadImages.single('gambar'),
  StafPembayaranController.updateStafPembayaran,
);
router.delete('/:id', StafPembayaranController.deleteStafPembayaran);

module.exports = router;
