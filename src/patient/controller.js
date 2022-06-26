const pool = require('../../db');
const queries = require('./queries');
const getpatients = (req, res) => {
  //console.log("getting patient");
  pool.query(queries.getpatients, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
    //res.send("all patient");
  });
};
const getPatientById = (req, res) => {
  const pid = parseInt(req.params.pid);
  pool.query(queries.getPatientById, [pid], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
    console.log("get patient successfully");
    //console.log(getPatientByname);
  });
};

const addPatient = (req, res) => {
  const { pid, pname, pemail, mobile, password } = req.body;
  pool.query(queries.checkEmailExists, [pemail], (error, results) => {
    if (results.rows.length) {
      res.send("email already exists.");
    }
    pool.query(
      queries.addPatient,
      [pid, pname, pemail, mobile, password],
      (error, results) => {
        if (error) throw error
        {
          res.status(201).send("patient created successfully");
          console.log("patient created successfully");
        }
      });
  });

};
const removepatient = (req, res) => {
  const pid = parseInt(req.params.pid);
  pool.query(queries.removepatient, [pid], (error, results) => {
    const nopatientfound = !results.rows.length;
    if (nopatientfound) {
      res.send("patient does not exist in the database");
    }
  });
};

const updatepatient = (req, res) => {
  const pid = parseInt(req.params.pid);
  const pname = req.body.pname;
  pool.query(queries.updatepatient, [pname, pid], (error, results) => {
    const nopatientfound = !results.rows.length;
    if (nopatientfound) {
      res.send("patient does not exist in the database");
    }
  });
};
const loginPatient = (req, res) => {
  const pemail = req.body.pemail;
  const password = req.body.password;
  pool.query(queries.getPatientByemail, [pemail], (error, results) => {
     if(error) {
      res.status(500).json({"msg":"something wrong"})
     }
    const user = results.rows[0];
    if (user) {
      if (password === user.password) {
        res.status(200).json(user);
      }
      else {
        res.status(400).json({ " msg": "invalid password" })
      }
    }
    else {
      res.status(400).json({ " msg": "invalid email" })
    }
    console.log("get patient successfully");
    //console.log(getPatientByname);
  });
};


module.exports = {
  getpatients,
  getPatientById,
  addPatient,
  updatepatient,
  removepatient,
  loginPatient
};