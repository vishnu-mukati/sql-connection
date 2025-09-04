const Bookings = require('./bookings');
const Bus = require('./bus');
const User = require('./user');


// one to many 

User.hasMany(Bookings,{ foreignKey: 'UserId' })
Bookings.belongsTo(User,{ foreignKey: 'UserId' })

Bus.hasMany(Bookings,{ foreignKey: 'BusId' })
Bookings.belongsTo(Bus,{ foreignKey: 'BusId' })

module.exports = {
    Bookings,
    Bus,
    User
};