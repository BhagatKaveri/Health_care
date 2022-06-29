const getpatients = "select * from Patient";
const getPatientById = "SELECT pemail,mobile FROM Patient where pname= $1";
const checkEmailExists = "SELECT s FROM Patient s WHERE s.pemail = $1";
const registerpatient="Insert into Patient (pname,pemail,mobile,password) values ($1, $2,$3,$4)";
const updatepatient="UPDATE Patient SET pname =$1 where pname = $2 ";
const removepatient="delete from Patient where pname = $1 ";
const getPatientByemail = "SELECT * FROM Patient where pemail= $1";
module.exports = {
    getpatients,
    getPatientById,
    checkEmailExists,
    registerpatient,
    updatepatient,
    removepatient,
    getPatientByemail,
};