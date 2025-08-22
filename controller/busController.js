const db = require('../utils/db-connections');
const { getUserEntries } = require('./userController');

const addBusEntries = ((req,res)=>{
    const {busName,availableSeats} = req.body;
    const insertBusQuery = `INSERT INTO bus (busName,availableSeats) VALUES (?,?)`
    db.execute(insertBusQuery,[busName,availableSeats],(err)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            // db.end();
            return;
        }
        console.log("values has been inserted of user");
        res.status(200).send("Data inserted successfully");
    })
})

const getBusEntries = ((req,res)=>{
    const {seats} = req.params;
    const retriveBusDataQuery = `SELECT * FROM bus WHERE availableSeats >${seats}`;
    db.execute(retriveBusDataQuery,(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows ===0){
             res.status(404).send("student not found");
        }
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    })  
})

module.exports = {
    addBusEntries,
    getBusEntries
}