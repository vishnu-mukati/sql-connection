const db = require('../utils/db-connections');
const userModel = require('../models/user');

const addUserEntries = (async (req, res) => {

    try {
        const { name, email } = req.body;
        const response = await userModel.create({
            name: name,
            email: email
        })
        res.status(200).send(response);
    } catch (err) {
        res.status(500).send('error occurred while fetching data');
    }
    // const insertUserQuery = `INSERT INTO users (name,email) VALUES (?,?)`
    // db.execute(insertUserQuery,[name,email],(err)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     console.log("values has been inserted of user");
    //     res.status(200).send("Data inserted successfully");
    // })
})

const getUserEntries = (async(req, res) => {
    try{
        const response = await userModel.findAll()
        if(!response){
            res.send(404).send('user not found');
        }
        res.status(200).json(response);
    }catch(err){

    }
    // const retriveUserDataQuery = `SELECT * FROM users`;
    // db.execute(retriveUserDataQuery, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     if (result.affectedRows === 0) {
    //         res.status(404).send("student not found");
    //     }
    //     res.status(200).send(JSON.stringify(result));
    // })
})

module.exports = {
    addUserEntries,
    getUserEntries
}