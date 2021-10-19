/* index.js ainoastaan importtaa tiedostossa app.js olevan varsinaisen sovelluksen ja 
käynnistää sen. 
Käynnistymisestä kertova konsolitulostus tehdään logger-moduulin funktion info avulla.
 */
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')
const app = require('./app') // varsinainen Express-sovellus

/* Sovelluksen käynnistäminen tapahtuu nyt server-muuttujassa olevan olion kautta. */
const server = http.createServer(app)


const PORT = process.env.PORT //3001
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
})


