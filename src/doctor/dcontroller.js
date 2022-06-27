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
        console.log(" doctor login successfully");
        //console.log(getPatientByname);
    });
};



const registerdoctor = async (req, res) => {
    const did = req.body.did;
    const dname = req.body.dname;
    const speciality = req.body.speciality;
    const visiting_day = req.body.visiting_day;
    const visiting_time = req.body.visiting_time;
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
                    dqueries.registerdoctor, [did,
                        dname,
                        speciality,
                        visiting_day,
                        visiting_time,
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
                        if (flag) {
                            const token = jwt.sign({ demail: demail }, process.env.SECRET_KEY);
                        }
                    });
            })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "database error while registation patient", })

    }
}


const getDoctorById = (req, res) => {
    const did = parseInt(req.params.did);
    pool.query(dqueries.getDoctorById, [did], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
        console.log("get patient successfully");
        //console.log(getPatientByname);
    });
};

const updatedoctor = (req, res) => {
    const did = parseInt(req.params.did);
    const { dname, demail } = req.body
    pool.query(dqueries.updatedoctor, [dname, demail, did], (error, results) => {
        const nopatientfound = !results.rows.length;
        if (nopatientfound) {
            res.send("patient does not exist in the database");
        }
    });
};
const removedoctor = (req, res) => {
    const did = parseInt(req.params.did);
    pool.query(dqueries.removedoctor, [did], (error, results) => {
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
