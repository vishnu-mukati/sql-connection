const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connections');

const bus = sequelize.define('buses',{
    id : {
          type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    busName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    availableSeats : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
})

module.exports = bus;