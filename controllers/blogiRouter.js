/*
Routejen tapahtumankäsittelijöitä kutsutaan usein kontrollereiksi.
Tiedosto eksporttaa moduulin käyttäjille määritellyn routerin.
Kaikki määriteltävät routet liitetään router-olioon, samaan tapaan kuin aiemmassa versiossa routet liitettiin sovellusta edustavaan olioon. 
Router on siis middleware, jonka avulla on mahdollista määritellä joukko "toisiinsa liittyviä" routeja yhdessä paikassa, yleensä omassa moduulissaan.
Varsinaisen sovelluslogiikan määrittelevä tiedosto app.js ottaa määrittelemämme routerin käyttöön seuraavasti:
const notesRouter = require('./controllers/notes')
app.use('/api/notes', notesRouter)
*/
const logger = require('../utils/logger')
const blogiListaRouter = require('express').Router()
const Blog = require('../models/blog')


blogiListaRouter.get('/', (request, response) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

blogiListaRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)
    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

module.exports = blogiListaRouter