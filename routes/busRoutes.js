const express = require('express');
const busController = require('../controller/busController');
const router = express.Router();

router.post('/',busController.addBusEntries);
router.get('/available/:seats',busController.getBusEntries);
router.get('/',busController.getBusEntries);
router.get('/:id/bookings', busController.getBusBookings);


module.exports = router;