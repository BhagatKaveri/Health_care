const getpatients = "select * from patient";
const getPatientById = "SELECT pname,pemail,password FROM patient where pid= $1";
const checkEmailExists = "SELECT s FROM patient s WHERE s.pemail = $1";
const addPatient="Insert into patient (pid,pname,pemail,mobile,password) values ($1, $2,$3,$4,$5)";
const updatepatient="UPDATE patient SET pname =$1 where pid = $2 ";
const removepatient="delete from patient where pid = $1 ";
const getPatientByemail = "SELECT * FROM patient where pemail= $1";
module.exports = {
    getpatients,
    getPatientById,
    checkEmailExists,
    addPatient,
    updatepatient,
    removepatient,
    getPatientByemail,
};