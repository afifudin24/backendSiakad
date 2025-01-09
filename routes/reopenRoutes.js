const router = require('express').Router()

const ReopenController = require('../controllers/reopenController')

router.get('/', ReopenController.getDataAll)
router.get('/:guruId', ReopenController.getDataByGuruId)
router.post('/', ReopenController.insertData)
router.put('/:id', ReopenController.updateData)
router.delete('/:id', ReopenController.deleteData)
module.exports = router
