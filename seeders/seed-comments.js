const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    console.log('GET place')
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })
    //Create a fake sample comment.
    console.log('create comment')
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })
    console.log('push to array')
    //Add that comment to the place's comment array.
    place.comments.push(comment.id)

    //save the place now that it has comment
    console.log('save place')
    await place.save()

    // Exit the program
    console.log('Finito y adios!')
    process.exit()
}

seed()