const Booking = require('./bookings');
const Bus = require('./bus');
const User = require('./user');


// one to many 

User.hasMany(Booking ,{ foreignKey: 'userId' });
Booking.belongsTo(User,{ foreignKey: 'userId' });

Bus.hasMany(Booking ,{ foreignKey: 'busId' });
Booking.belongsTo(Bus , { foreignKey: 'busId' });

module.exports = {
    Booking,
    Bus,
    User
};