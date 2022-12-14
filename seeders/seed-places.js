const db = require('../models/index')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/jerome-jome-h-thai-ml-unsplash.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ', 
    cuisines: 'Coffee, Bakery',
    pic: '/images/nathan-dumlao-coding-cat-cafe-unsplash.jpg',
    founded: 2020
}, {
    name: 'Momma Kyriaku\'s Gyros',
    city: 'New York City',
    state: 'NY',
    cuisines: 'Greek, American',
    pic: 'https://images.unsplash.com/photo-1562631320-c61a49d420ba',
    founded: 2021
}, {
    name: 'Tom\'s Pizza and Crematorium',
    city: 'Four Oaks',
    state: 'NC',
    cuisines: 'Pizza, Human flesh',
    pic: 'https://images.unsplash.com/photo-1579751626657-72bc17010498',
    founded: 2022
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})