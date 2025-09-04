const db = require('../utils/db-connections');
const userModel = require('../models/user');
const Bookings = require('../models/bookings');
const Bus = require('../models/bus');

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

const getUserEntries = (async (req, res) => {
    try {
        const response = await userModel.findAll()
        if (!response) {
            res.send(404).send('user not found');
        }
        res.status(200).json(response);
    } catch (err) {

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
const getUserBookings = async (req, res) => {
    try {
        console.log(Bookings.associations);
        const { id } = req.params;
        const bookings = await Bookings.findAll({
            where: { UserId: Number(id) },
          attributes: { exclude: ['UserId', 'BusId', 'createdAt', 'updatedAt'] },
            include: [{
                model: Bus,
                attributes: ['busNumber']
            }]
        });

        if (!bookings || bookings.length === 0) {
            return res.status(404).send('No bookings found for this user');
        }

        res.status(200).json(bookings);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching user bookings', err.message);
    }
};

module.exports = {
    addUserEntries,
    getUserEntries,
    getUserBookings
}