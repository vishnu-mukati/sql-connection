const Bookings = require('../models/bookings');
const User = require('../models/user');

const addBooking = async(req,res)=>{
    try{
         const {UserId, BusId, SeatNumber} = req.body;
         const response = await Bookings.create({
            UserId: UserId,
            BusId: BusId,       
            SeatNumber: SeatNumber
         })
         res.status(200).send(response);
    }catch(err){
        res.status(500).send({error: err.message});
    }
}


module.exports = {
    addBooking,
}