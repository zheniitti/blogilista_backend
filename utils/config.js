
//Ympäristömuuttujien käsittely on eriytetty moduulin utils/config.js vastuulle:

require('dotenv').config() //osa3c, tehdään .env, jota tulee heti git-ignorata, heroku konfiguroitava

let PORT = process.env.PORT
let MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI

module.exports = {
    MONGODB_URI,
    PORT
}