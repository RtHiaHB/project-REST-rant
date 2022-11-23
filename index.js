require('dotenv').config();
const express = require('express');
const app = express();

app.use('/places', require('./controllers/places'))

const { PORT } = process.env
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 page</h1>')
})

app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}...`);
})