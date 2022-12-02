require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

const { PORT } = process.env
app.get('/', (req, res) => {
    res.render('home')
});

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}...`);
})