const express = require('express')
const router = express.Router()
const { uploadImages, uploadPDFs } = require('../middleware/multerConfig')
const AdminController = require('../controllers/adminController')
const Admin = require('../models/adminModels')

router.get('/', AdminController.getAdmin)
router.get('/:id', AdminController.getAdminById)
router.post('/', uploadImages.single('gambar'), AdminController.createAdmin)
// router.put('/:id', AdminController.updateAdmin);
router.put('/:id', uploadImages.single('gambar'), AdminController.updateAdmin)
router.delete('/:id', AdminController.deleteAdmin)
module.exports = router
