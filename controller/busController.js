const db = require('../utils/db-connections');
const busModal = require('../models/bus');


// const { getUserEntries } = require('./userController');

const addBusEntries = (async (req, res) => {
    try {
        const { busName, availableSeats } = req.body;
        const response = await busModal.create({
            busName : busName,
            availableSeats : availableSeats
        })
        res.status(200).send(response);
    } catch (err) {
res.status(500).send(err.message);
    }

    // const insertBusQuery = `INSERT INTO bus (busName,availableSeats) VALUES (?,?)`
    // db.execute(insertBusQuery,[busName,availableSeats],(err)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         // db.end();
    //         return;
    //     }
    //     console.log("values has been inserted of user");
    //     res.status(200).send("Data inserted successfully");
    // })
})

const getBusEntries = (async(req, res) => {
    try{
const { seats } = req.params;
const response = await busModal.findAll({
   where: Sequelize.literal(`availableSeats > ${seats}`)
})
if(!response){
    res.status(404).send('bus not found');
}
res.status(200).json(response);
    }catch(err){
res.status(500).send('error occurred while getting data');
    }
    
    // const retriveBusDataQuery = `SELECT * FROM bus WHERE availableSeats >${seats}`;
    // db.execute(retriveBusDataQuery, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     if (result.affectedRows === 0) {
    //         res.status(404).send("student not found");
    //     }
    //     console.log(result);
    //     res.status(200).send(JSON.stringify(result));
    // })
})

module.exports = {
    addBusEntries,
    getBusEntries
}