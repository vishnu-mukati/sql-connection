const express = require('express');
const bookingController = require('../controller/bookingController');
const router = express.Router();

router.post('/',bookingController.addBooking);
router.get('/users/:id/bookings', bookingController.getUserBookings);
router.get('/buses/:id/bookings', bookingController.getBusBookings);

module.exports = router;