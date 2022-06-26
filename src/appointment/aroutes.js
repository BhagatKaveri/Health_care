const { Router } = require ('express');
const dcontroller = require('./acontroller');
const router = Router();
router.get("/allappointment",dcontroller.getappointments);


module.exports = router;