const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors')
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const connectToDb = require('./Database/db')
const userRoutes = require ('./routes/userRoutes');
const captainRoutes = require('./routes/captain.Routes')


connectToDb();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) => {
    res.send("hello buddy")
})

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
module.exports = app;