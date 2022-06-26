const pool = require('../../db');
const dqueries = require('./dqueries');
const getdoctors = (req,res) =>
{
//console.log("getting patient");
pool.query(dqueries.getdoctors , (error,results) => {
    if(error) throw error;
    res.status(200).json(results.rows);
//res.send("all patient");
});
};
const adddoctor= (req,res) =>
 {
    const {did,dname,speciality,visiting_day,visiting_time,landline,demail} = req.body;
    pool.query(dqueries.checkEmailExists, [demail],(error,results) => {
      if(results.rows.length) {
      res.send("email already exists.");
     }
    pool.query(
        dqueries.adddoctor,
        [did,dname,speciality,visiting_day,visiting_time,landline,demail],
        (error, results) => {
        if(error) throw error;
        res.status(201).send("doctor created successfully");
        console.log("doctor created successfully");
        
     });
    });  
  
 }

 const getDoctorById = (req,res) =>
 {
    const did=parseInt(req.params.did);
    pool.query(dqueries.getDoctorById,[did],(error,results) => {
              if(error) throw error;
               res.status(200).json(results.rows);
            console.log("get patient successfully");
        //console.log(getPatientByname);
    });
};

const updatedoctor=(req,res)  => {
    const did = parseInt(req.params.did);
    const  {dname , demail}  = req.body
    pool.query(dqueries.updatedoctor,[dname,demail,did],(error,results) => {
const nopatientfound = ! results.rows.length ;
if(nopatientfound) { 
res.send("patient does not exist in the database");
  }
  });
};
const removedoctor=(req,res)  => {
    const did = parseInt(req.params.did);
 pool.query(dqueries.removedoctor,[did],(error,results) => {
const nopatientfound = !results.rows.length;
if(nopatientfound) { 
res.send("patient does not exist in the database");
  }
  }); 
};

module.exports = {
    getdoctors,
    adddoctor,
    getDoctorById,
    updatedoctor,
    removedoctor,

};
