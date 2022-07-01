const pool = require('../../db');
const dqueries = require('./dqueries');
const bcrypt = require('bcrypt');
const Validator = require("validator");
const getdoctors = (req, res) => {
    //console.log("getting patient");
    pool.query(dqueries.getdoctors, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
        res.send("all patient");
    });
};


const logindoctor = (req, res) => {
    const demail = req.body.demail;
    const password = req.body.password;
    pool.query(dqueries.getdoctorByemail, [demail], (error, results) => {
        if (error) {
            res.status(500).json({ "msg": "something wrong" , status : false})
        }
        const user = results.rows[0];
        if (user) {
            if (password === user.password) {
                console.log(" doctor login successfully");
                res.status(200).json({status : true ,data :user});
                
            }
            else {
                res.status(400).json({ " msg": "invalid password" ,status : false })
            }
        }
        else {
            res.status(400).json({ " msg": "invalid email",status : false })
        }
        
        //console.log(getPatientByname);
    });
};



const registerdoctor = async (req, res) => {
   // const did = req.body.did;
    const dname = req.body.dname;
    const speciality = req.body.speciality;
    const start_time = req.body.start_time;
    const end_time = req.body.end_time;
    const landline = req.body.landline;
    const demail = req.body.demail;
    const password = req.body.password;
    try {
        const data = await dqueries.getdoctorByemail;
        const arr = data.rows;
        if (arr && arr.length) {
            return res.status(400).json({ error: "email already there,no need to register again" });
        }
        else {
            bcrypt.hash(password, 8, (error, hash) => {
                if (error)
                    res.status(error).json({ error: "server error", });
                
                var flag = 1;
                pool.query(
                    dqueries.registerdoctor, [
                        dname,
                        speciality,
                        start_time,
                        end_time,
                        landline,
                        demail,
                        password],
                    (error, results) => {
                        if (error) {
                            flag = 0;//if user is not insert is inserted to databse
                            console.error(error);
                         res.status(500).json({ error: "database error" })
                        }
                        else {
                            flag = 1;
                            res.status(200).send({ "msg": "user added to database" });
                        }
                       // if (flag) {
                        //    const token = jwt.sign({ demail: demail }, process.env.SECRET_KEY);
                       // }
                    });
            })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "database error while registration patient", })

    }
}


const getDoctorById = (req, res) => {
    //const did = parseInt(req.params.did);
    const dname = req.body.dname;
    pool.query(dqueries.getDoctorById, [dname], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
        console.log("get patient successfully");
        //console.log(getPatientByname);
    });
};

const updatedoctor = (req, res) => {
    //const did = parseInt(req.params.did);
    const dname = req.body.dname;
    const demail  = req.body.demail;
    pool.query(dqueries.updatedoctor, [dname, demail], (error, results) => {
        const nopatientfound = !results.rows.length;
        if (nopatientfound) {
            console.log("patient does not exist in the database");
        }
    });
};
const removedoctor = (req, res) => {
    //const did = parseInt(req.params.did);
    const dname = req.body.dname;
    pool.query(dqueries.removedoctor, [dname], (error, results) => {
         const nopatientfound = !results.rows.length;
        if (nopatientfound) {
            res.send("patient does not exist in the database");
         }
    });
};

module.exports = {
    getdoctors,
    registerdoctor,
    getDoctorById,
    updatedoctor,
    removedoctor,
    logindoctor,

};
