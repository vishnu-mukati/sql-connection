const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/',userController.addUserEntries);
router.get('/',userController.getUserEntries);
router.get('/:id/bookings', userController.getUserBookings);



module.exports = router;