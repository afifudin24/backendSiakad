const express = require('express');
const DataMengajarController = require('../controllers/dataMengajarController');
const router = express.Router();

router.get('/', DataMengajarController.getDataMengajar);
router.get('/:id', DataMengajarController.getDataMengajarById);
router.post('/', DataMengajarController.createDataMengajar);
router.put('/:id', DataMengajarController.updateDataMengajar);
router.delete('/:id', DataMengajarController.deleteDataMengajar);
module.exports = router;