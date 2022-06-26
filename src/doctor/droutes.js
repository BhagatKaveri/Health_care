const { Router } = require ('express');
const dcontroller = require('./dcontroller');
const router = Router();

router.get("/alldoctor",dcontroller.getdoctors);
router.post("/createdoctor", dcontroller.adddoctor);
router.get("/getdoctor/:did", dcontroller.getDoctorById);
router.put("/updatedoctor/:did",  dcontroller.updatedoctor);
router.delete("/deletedoctor/:did",dcontroller.removedoctor);


module.exports = router;