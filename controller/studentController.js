const db = require('../utils/db-connections');

const addEntries = ((req,res)=>{
    const {email,name} = req.body;
    const insertQuery = `INSERT INTO students (email,name) VALUES(?,?)`;
    db.execute(insertQuery,[email,name],(err)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log('values has been inserted')
        res.status(200).send(`student ${name} successfully added`);
    })
})

const updateEntries = ((req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const updateQuery = `UPDATE students SET name=? WHERE id= ?`;
    db.execute(updateQuery,[name,id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).res.send(err.message);
            db.end();
            return;
        }

        if(result.affectedRows ===0){
            res.status(404).send("student not found");
        }
        console.log('values are updated')
        res.status(200).send(`updated values are ${name}`);
    })
})

const deleteEntries =  ((req,res)=>{
    const {id} = req.params;
    const deleteQuery = `DELETE FROM students WHERE id = ?`;
    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }
            if(result.affectedRows === 0){
                res.status(404).send("student not found");
                return;
            }
            console.log("data is deleted");
            res.status(200).send("data is deleted successfully");
    })
})


module.exports = {
    addEntries,
    updateEntries,
    deleteEntries
};