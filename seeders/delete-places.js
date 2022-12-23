const db = require('../models/index')

db.Place.deleteMany()
    .then(() => {
        console.log('Place Delete Success!')
    })
    .catch((err) => {
        console.log('Place Delete Failure!', err)
        process.exit()
    })
    .then(() => {
        db.Comment.deleteMany()
        .then(() => {
            console.log('Comment DELETE success!')
            process.exit()
        })
        .catch((err) => {
            console.log('Comment DELETE Failure!', err)
            process.exit()
        })
    })