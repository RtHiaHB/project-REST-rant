// Modules and globals
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')
const { PORT } = process.env

//Express stuffs
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Controllers and Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    //res.render('home')
    res.send("Hello, John")
})

app.get('*', (req, res) => {
    res.render('error404')
})

//database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => { console.error(err)})

// Listen for connections
app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}...`);
})

module.exports = app
