const db = require('../utils/db-connections');

const addUserEntries = ((req,res)=>{
    const {name,email} = req.body;
    const insertUserQuery = `INSERT INTO users (name,email) VALUES (?,?)`
    db.execute(insertUserQuery,[name,email],(err)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("values has been inserted of user");
        res.status(200).send("Data inserted successfully");
    })
})

const getUserEntries = ((req,res)=>{
    const retriveUserDataQuery = `SELECT * FROM users`;
    db.execute(retriveUserDataQuery,(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows ===0){
             res.status(404).send("student not found");
        }
        res.status(200).send(JSON.stringify(result));
    })  
})

module.exports = {
    addUserEntries,
    getUserEntries
}