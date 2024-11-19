const express = require('express');
const DataMengajarController = require('../controllers/dataMengajarController');
const router = express.Router();

router.get('/getAll/', DataMengajarController.getDataMengajar);
router.get('/getById/:id', DataMengajarController.getDataMengajarById);
router.get(
  '/getByGuruId/:guruId',
  DataMengajarController.getDataMengajarByGuruId,
);
router.get(
  '/getKelasDataMengajar/:guruId/:mapelId',
  DataMengajarController.getKelasDataMengajar,
);
router.post('/', DataMengajarController.createDataMengajar);
router.put('/:id', DataMengajarController.updateDataMengajar);
router.delete('/:id', DataMengajarController.deleteDataMengajar);
module.exports = router;
