const getdoctors = "select * from doctor";
const registerdoctor="insert into doctor (did,dname,speciality,visiting_day,visiting_time,landline,demail,password) values ($1, $2,$3,$4,$5,$6,$7,$8)";
const checkEmailExists = "SELECT s FROM doctor s WHERE s.demail = $1";
const getDoctorById = "SELECT dname,demail,speciality FROM doctor where did= $1";
const updatedoctor="UPDATE doctor SET dname =$1,demail=$2 where did = $3 ";
const removedoctor="delete from doctor where did = $1 ";
const getdoctorByemail = "SELECT * FROM doctor where demail= $1";
module.exports = {
    getdoctors,
     checkEmailExists,
    getDoctorById,
    updatedoctor,
    removedoctor,
    getdoctorByemail,
    registerdoctor,
};