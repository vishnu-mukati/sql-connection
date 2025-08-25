const express = require('express');
const db = require('./utils/db-connections');
const studentRouter = require('./routes/studentRoutes');
const userRouter = require('./routes/userRoutes');
const busRouter = require('./routes/busRoutes');



const app = express();

app.use(express.json());

app.use('/students',studentRouter);
app.use('/users',userRouter);
app.use('/buses',busRouter);

app.get('/', (req, res) => {
    res.send('hello world');
})

db.sync().then(()=>{
    app.listen(3000,(err)=>{
    console.log("server is running");
})
}).catch((err)=>{
    console.log(err);
})
