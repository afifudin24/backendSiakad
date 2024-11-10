const express = require('express');
const router = express.Router();
const SekolahController = require('../controllers/sekolahController');

router.get('/getData', SekolahController.getData);
router.post(`/insertData`, SekolahController.insertData);
router.put(`/updateData`, SekolahController.updateData);
module.exports = router;
