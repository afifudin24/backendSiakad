const express = require('express');
const SiswaController = require('../controllers/siswaController');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken')

router.get('/' , verifyToken ,SiswaController.getAllSiswa);
router.get('/:userId' ,SiswaController.getSiswaById);
router.post('/' , SiswaController.createSiswa);
router.put('/:userId',SiswaController.updateSiswa);
router.delete('/:userId',SiswaController.deleteSiswa);

module.exports = router;
