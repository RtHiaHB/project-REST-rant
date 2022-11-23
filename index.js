require('dotenv').config();
const express = require('express');
const app = express();
const { PORT } = process.env
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}...`);
})