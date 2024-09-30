const express = require('express');
const router = express.Router();
const TugasController = require('../controllers/tugasController');

router.get('/', TugasController.getTugas);
router.get('/byId', TugasController.getTugas);
router.get(
  '/getByDataMengajarGuruId/:guruId',
  TugasController.getTugasByDataMengajarGuru,
);
router.get(
  '/getByDataMengajarId/:datamengajarId',
  TugasController.getTugasByDataMengajarId,
);
// Get By Kelas
router.get('/byKelas/:idKelas', TugasController.getTugasByKelas);
// Get By Kelas & Siswa
router.get(
  '/byKelasSiswa/:idKelas/:idSiswa',
  TugasController.getTugasByKelasSiswa,
);

// Get By Kelas, Mapel, Siswa
router.get(
  '/byKelasMapelSiswa/:idKelas/:idSiswa/:idMapel',
  TugasController.getTugasByKelasMapelSiswa,
);
router.post('/', TugasController.createTugas);
router.put('/:id', TugasController.updateTugas);
router.delete('/:id', TugasController.deleteTugas);
module.exports = router;
