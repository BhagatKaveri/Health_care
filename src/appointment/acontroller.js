const pool = require('../../db');
const aqueries = require('./aqueries');
const bcrypt = require('bcrypt');
const getappointments = (req,res) =>
{
//console.log("getting patient");
pool.query(aqueries.getappointments  , (error,results) => {
    if(error) throw error;
    res.status(200).json(results.rows);

});
};

const makeappointment = async (req, res) => {
   
    const pname = req.body.pname;
    const pemail = req.body.pemail;
    const select_date=req.body.select_date;
    const select_time=req.body.select_time;
    const speciality=req.body.speciality;
    const mobile = req.body.mobile;
    const massage = req.body.massage;
    
  
          pool.query(
            aqueries.addappointment,
            [ pname, pemail,select_date,select_time,speciality, mobile,massage],
            (error, results) => {
              if (error) {
                //flag = 0;//if user is not insert is inserted to databse
                res.status(500).json({ "msg": "database error" })
              }
              else {
               // flag = 1;
                return res.status(200).json({ "msg": "user added to database" });
              }
            })
        }


module.exports = {
getappointments,
makeappointment,
};