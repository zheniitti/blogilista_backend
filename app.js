const config = require('./utils/config')
const logger = require('./utils/logger')

const express = require('express')
const app = express()

const cors = require('cors') //osa3b, Cross-origin resource sharing, npm install cors

const blogsRouter = require('./controllers/blogiRouter')
const mongoose = require('mongoose')

console.log('Connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI).then(result => console.log('Connected to database.'))
    .catch((error) => {
        logger.error('error connection to MongoDB:', error.message)
    })


app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter) //tämä oltava ennen app.use(express.json()), jotta parsitus onnistuu

module.exports = app
