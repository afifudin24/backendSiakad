const router = require('express').Router();
const ValidasiMengajarController = require('../controllers/validasiMengajarController');
router.get('/getValidasiMengajarByJurnalIdSiswa/:jurnalId/:siswaId', ValidasiMengajarController.getValidasiMengajarByJurnalIdSiswa);
router.get('/cekRequireValidasi/:siswaId', ValidasiMengajarController.getRequireValidasi);
router.post('/', ValidasiMengajarController.insertValidasiMengajar);
module.exports = router;