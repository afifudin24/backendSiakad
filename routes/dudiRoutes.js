const express = require("express");
const router   = express.Router();
const DudiController = require("../controllers/dudiController");
router.get("/getAll", DudiController.getAllDudi);
router.get("/getByJurusan/:jurusan", DudiController.getDudiByJurusan);
router.post("/", DudiController.addDudi);
router.put("/:dudiId", DudiController.updateDudi);
router.delete("/:dudiId", DudiController.deleteDudi);
module.exports = router;