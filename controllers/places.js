const router = require('express').Router()
const db = require('../models/index')

router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

router.post('/', (req, res) => {
    let { pic, city, state } = req.body
    if(!pic) req.body.pic = undefined
    if(!city) req.body.city = undefined
    if(!state) req.body.state = undefined
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    await db.Place.findByIdAndUpdate(id, req.body)
    res.redirect(`/places/${id}`)

})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    db.Place.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/places')
        })
        .catch((err) => {
            console.log("Error!", err)
        })
    //res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    //res.send('GET edit form stub')
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router