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

router.post('/:id/rant', (req, res) => {
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
        .then(place => {
            //create comment
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                    .then(() => {
                        res.redirect(`/places/${req.params.id}`)
                    })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
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
        .populate('comments')
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
        .then(()=>{
            res.redirect(`/places/${id}`)
        })
        .catch(err => {
            console.log('PUT error!', err)
            res.render('error404')
        })
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    place = await db.Place.findById(id)
    if(place.comments.length != 0) {
        for(let i = 0; i < place.comments.length; i++) {
            await db.Comment.findByIdAndDelete(place.comments[i])
        }
    }
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

router.get('/:id/rant', (req, res) => {
    const { id } = req.params
    db.Place.findById(id)
        .then(place => {
            res.render('places/comment', place)
        })
})



router.delete('/:id/rant/:rantId', (req, res) => {
    const { id, rantId } = req.params
    console.log(id)
    let redir = `places/${id}`
    console.log(redir)
    db.Comment.findByIdAndDelete(rantId)
        .then(() => {
            res.redirect(`/places/${id}`)
        })
        .catch((err) => {
            console.log("error in router delete by rantId", err)
            res.render('error404')
        })
})

module.exports = router