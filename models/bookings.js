const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connections');

const Bookings = sequelize.define('bookings',{
    id : {
          type : DataTypes.INTEGER, 
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    UserId : {
        type : DataTypes.INTEGER,   
        allowNull : false,
    },
    BusId : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    SeatNumber : {  
        type : DataTypes.INTEGER,
        allowNull : false,
    }
});

module.exports = Bookings;