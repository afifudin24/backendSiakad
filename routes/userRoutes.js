const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

router.post('/changePassword/:id', UserController.changePassword);
module.exports = router;