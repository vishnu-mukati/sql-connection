const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/',userController.addUserEntries);
router.get('/',userController.getUserEntries);


module.exports = router;