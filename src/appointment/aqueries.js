const getappointments = "select * from makeappointment";
const addappointment="insert into makeappointment(pname,pemail,select_date,select_time,speciality,mobile) values($1,$2,$3,$4,$5,$6)";

module.exports = {
    getappointments,
    addappointment,
};