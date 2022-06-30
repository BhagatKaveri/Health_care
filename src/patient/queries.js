const getpatients = "select * from patient";
const getPatientById = "SELECT pemail,mobile FROM patient where pname= $1";
const checkEmailExists = "SELECT s FROM patient s WHERE s.pemail = $1";
const registerpatient="Insert into patient (pname,pemail,mobile,password) values ($1, $2,$3,$4)";
const updatepatient="UPDATE patient SET pname =$1 where pname = $2 ";
const removepatient="delete from patient where pname = $1 ";
const getPatientByemail = "SELECT * FROM patient where pemail= $1";
module.exports = {
    getpatients,
    getPatientById,
    checkEmailExists,
    registerpatient,
    updatepatient,
    removepatient,
    getPatientByemail,
};