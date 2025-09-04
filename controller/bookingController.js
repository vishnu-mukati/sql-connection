const Bookings = require('../models/bookings');
const Bus = require('../models/bus');
const User = require('../models/user');

const addBooking = async(req,res)=>{
    try{
         const {userId, busId, seatNumber} = req.body;
         const response = await Bookings.create({
            userId : userId,
            busId : busId,
            seatNumber : seatNumber 
         })
         res.status(200).send(response);
    }catch(err){
        res.status(500).send({error: err.message});
    }
}

const getUserBookings = async (req, res) => {
    try {
        const { id } = req.params;
        const bookings = await Bookings.findAll({
            where: { userId: id },
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
        res.status(500).send('Error fetching user bookings');
    }
};

// Get All Bookings for a Specific Bus with User Details
const getBusBookings = async (req, res) => {
    try {
        const { id } = req.params;
        const bookings = await Bookings.findAll({
            where: { busId: id },
            include: [{
                model: User,
                attributes: ['name', 'email']
            }]
        });
        
        if (!bookings || bookings.length === 0) {
            return res.status(404).send('No bookings found for this bus');
        }
        
        res.status(200).json(bookings);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching bus bookings');
    }
};

module.exports = {
    addBooking,
    getUserBookings,
    getBusBookings
}