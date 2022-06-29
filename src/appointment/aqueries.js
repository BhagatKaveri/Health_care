const getappointments = "select * from bookappointment";
const addappointment="insert into bookappointment(pname,pemail,select_date,select_time,speciality,mobile,massege) values($1,$2,$3,$4,$5,$6,$7)";

module.exports = {
    getappointments,
    addappointment,
};