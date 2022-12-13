const db = require('../models/index')

db.Place.deleteMany()
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch((err) => {
        console.log('Failure!', err)
        process.exit()
    })