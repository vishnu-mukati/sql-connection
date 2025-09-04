const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connections');

const Bus = sequelize.define('buses',{
    id : {
          type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    busNumber : {
        type : DataTypes.STRING,
        allowNull : false
    },
    totalSeats : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    availableSeats : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
})

module.exports = Bus;