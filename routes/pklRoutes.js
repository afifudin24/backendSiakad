const express = require('express');
const router = express.Router();
const PKLController = require('../controllers/pklController');

router.get('/getAll', PKLController.getAll);
router.get('/getByGuruId/:guruId', PKLController.getByGuruId);
router.get('/getBySiswaId/:siswaId', PKLController.getBySiswaId);
router.post('/', PKLController.addPKL);
router.put('/:id', PKLController.updatePKL);
router.delete('/:id', PKLController.deletePKL);
module.exports = router;
