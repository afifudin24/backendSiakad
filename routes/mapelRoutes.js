const express = require('express');
const mapelController = require('../controllers/mapelController');
const router = express.Router();

router.get('/', mapelController.getMapel);
router.get('/:id', mapelController.getMapelById);
router.post('/', mapelController.createMapel);
router.put('/:id', mapelController.updateMapel);
router.delete('/:id', mapelController.deleteMapel);
module.exports = router;