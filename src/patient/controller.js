const pool = require('../../db');
const queries = require('./queries');
const bcrypt = require('bcrypt');

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

const registerpatient = async (req, res) => {
  const pid = req.body.pid;
  const pname = req.body.pname;
  const pemail = req.body.pemail;
  const mobile = req.body.mobile;
  const password = req.body.password;
 try {
    const data = await queries.getPatientByemail;
    const arr = data.rows;
    if(arr && arr.length) {
      return res.status(400).json({ error: "email already there,no need to register again" });
    }
    else {
      bcrypt.hash(password, 8, (error, hash) => {
        if (error)
          res.status(error).json({ error: "server error" });
        /*const user ={
          pid,
          pname,
          pemail,
          mobile,
          password:hash,
        };*/
        var flag = 1;


        pool.query(
          queries.registerpatient,
          [pid, pname, pemail, mobile, password],
          (error, results) => {
            if (error) {
              flag = 0;//if user is not insert is inserted to databse
              res.status(500).json({ "msg": "database error" })
            }
            else {
              flag = 1;
              return res.status(200).json({ "msg": "user added to database" });
            }
           /*if (flag) {
              const token = jwt.sign({ pemail: pemail }, process.env.SECRET_KEY);
            }*/
          });
      })
    }
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: "database error while registation patient", })

  };
}


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
    const nopatientfound =! results.rows.length;
    if (nopatientfound) {
      res.send("patient does not exist in the database");
    }
  });
};
const loginPatient = (req, res) => {
  const pemail = req.body.pemail;
  const password = req.body.password;
  pool.query(queries.getPatientByemail, [pemail], (error, results) => {
    if (error) {
      res.status(500).json({ "msg": "something wrong" })
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
    console.log(" patient login successfully");
    //console.log(getPatientByname);
  });
};


module.exports = {
  getpatients,
  getPatientById,
  registerpatient,
  updatepatient,
  removepatient,
  loginPatient
};