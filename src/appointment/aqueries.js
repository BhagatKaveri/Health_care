const getappointments = "select * from bookingappointment";
const addappointment="insert into  bookingappointment(appointment_number,pemail,dname, select_date,select_time,speciality,message) values('104','nikita','Dr.Alok Devdhar','2022-07-03','02:30':PM,'Councilor','hjhjhh')";

module.exports = {
    getappointments,
    addappointment,
};