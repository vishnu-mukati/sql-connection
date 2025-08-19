const express = require('express');
const db = require('./utils/db-connections');
const studentRouter = require('./routes/studentRoutes');
const app = express();

app.use(express.json());

app.use('/students',studentRouter);

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(3000, (err) => {
    console.log('server is running');
})