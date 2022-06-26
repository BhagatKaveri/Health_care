const pool = require('../../db');
const dqueries = require('./aqueries');
const getappointments = (req,res) =>
{
//console.log("getting patient");
pool.query(dqueries.getappointments  , (error,results) => {
    if(error) throw error;
    res.status(200).json(results.rows);
//res.send("all patient");
});
};

module.exports = {
getappointments,
};