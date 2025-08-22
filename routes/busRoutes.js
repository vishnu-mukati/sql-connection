const express = require('express');
const busController = require('../controller/busController');
const router = express.Router();

router.post('/',busController.addBusEntries);
router.get('/available/:seats',busController.getBusEntries);


module.exports = router;