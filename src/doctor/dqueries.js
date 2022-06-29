const getdoctors = "select * from Doctor";
const registerdoctor="insert into Doctor (dname,speciality,visiting_day,visiting_time,landline,demail,password) values ($1, $2,$3,$4,$5,$6,$7,$8)";
const checkEmailExists = "SELECT s FROM Doctor s WHERE s.demail = $1";
const getDoctorById = "SELECT demail,speciality FROM Doctor where dname= $1";
const updatedoctor="UPDATE Doctor SET dname=$1,demail=$2 where dname = $3 ";
const removedoctor="delete from Doctor where dname = $1 ";
const getdoctorByemail = "SELECT * FROM Doctor where demail= $1";
module.exports = {
    getdoctors,
     checkEmailExists,
    getDoctorById,
    updatedoctor,
    removedoctor,
    getdoctorByemail,
    registerdoctor,
};