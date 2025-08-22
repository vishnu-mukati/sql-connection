const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0101',
    database: 'testdb'
})

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('connection has been created');

    const creationQuery = `CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(30)
    )`

    connection.execute(creationQuery, (err) => {
        if (err) {
            console.log(err);
            connection.end();
            return
        }
        console.log('table is created');
    })

    const userQuery = `CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(20)
        )`;
    connection.execute(userQuery, (err) => {
        if (err) {
            console.log('Error creating users table:', err);
            connection.end();
            return;
        }
        console.log('users table is created');
    });

    const bookingsQuery = `CREATE TABLE IF NOT EXISTS bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(100),
            totalSeats INT NOT NULL,
            availableSeats INT NOT NULL
        )`;
    connection.execute(bookingsQuery, (err) => {
        if (err) {
            console.log('Error creating bookings table:', err);
            connection.end();
            return;
        }
        console.log('bookings table is created');
    });

    const paymentsQuery = `CREATE TABLE IF NOT EXISTS payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT NOT NULL
        )`;
    connection.execute(paymentsQuery, (err) => {
        if (err) {
            console.log('Error creating payments table:', err);
            connection.end();
            return;
        }
        console.log('payments table is created');
    });

    const busQuery = `CREATE TABLE IF NOT EXISTS bus (
       id INT  AUTO_INCREMENT PRIMARY KEY,
       busName VARCHAR(50),
       availableSeats INT
    )`;
    connection.execute(busQuery,(err)=>{
        if(err){
            console.log('Error creating bus:',err);
            connection.end();
            return;
        }
        console.log("bus table is created");
    })
})


module.exports = connection;