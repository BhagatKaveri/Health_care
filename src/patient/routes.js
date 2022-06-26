const { Router } = require ('express');
const controller = require('./controller');
const router = Router();

router.get("/allpatient",controller.getpatients);
router.post("/createPatient", controller.addPatient);
router.get("/getpatient/:pid", controller.getPatientById);
 router.put("/upadatepatient/:pid",  controller.updatepatient);
 router.delete("/deletepatient/:pid",controller.removepatient);
 router.post("/login", controller.loginPatient);

module.exports = router;