const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const authController = require('../controllers/authController')
const UserController = require('../controllers/userController')
router.post('/login', authController.login)
router.post('/logout', verifyToken, authController.logout)
router.post('/changePassword/:id', UserController.changePassword)
// router.post('/changePassword/:id', UserController.changePassword);
module.exports = router
