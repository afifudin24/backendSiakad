const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');
const Admin = require('../models/adminModels');

router.get('/', AdminController.getAdmin);
router.post('/', AdminController.createAdmin);
router.put('/:id', AdminController.updateAdmin);
router.delete('/:id', AdminController.deleteAdmin);
module.exports = router;