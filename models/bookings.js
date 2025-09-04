const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connections');

const Booking = sequelize.define('bookings',{
    id : {
          type : DataTypes.INTEGER, 
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    userId : {
        type : DataTypes.INTEGER,   
        allowNull : false,
    },
    busId : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    seatNumber : {  
        type : DataTypes.INTEGER,
        allowNull : false,
    }
});

module.exports = Booking;