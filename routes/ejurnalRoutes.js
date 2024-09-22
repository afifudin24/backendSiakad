const express = require('express');
const router = express.Router();
const EjurnalController = require('../controllers/ejurnalController');

router.get('/getByGuruId/:idGuru', EjurnalController.getByGuruId);
router.get(
  '/getBymengajarIddate/:mengajarId/:date',
  EjurnalController.getBymengajarIdDate,
);
router.get(
  '/getBymengajarIdmonth/:mengajarId/:month/:year',
  EjurnalController.getBymengajarIdMonth,
);
router.post('/', EjurnalController.createEjurnal);
router.put('/:id', EjurnalController.updateJurnal);
module.exports = router;
