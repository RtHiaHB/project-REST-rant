// Modules and globules
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override')
const app = express();

//Express stuffs
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Controllers and Routes
app.use('/places', require('./controllers/places'))

const { PORT } = process.env
app.get('/', (req, res) => {
    res.render('home')
});

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for connections
app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}...`);
})

module.exports = app
