const mongoose = require('mongoose')
/**
 * osa4b, API:n testaamiseen Jestin apuna SuperTest-kirjasto
 */
const supertest = require('supertest') 
const app = require('../app')

/**
 * Testi importtaa tiedostoon app.js määritellyn Express-sovelluksen ja käärii sen funktion supertest
 *  avulla ns. superagent-olioksi.
 */
const api = supertest(app)


/**
 * 
 */
test('palauttaa oikean määrän JSON-muotoisia blogeja', async () => {
  //SuperTestin mekanismi statuskoodin ja vastauksen headereiden oikeellisuuden varmistamiseen
    await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})


/**
 * Kaikkien testien (joita siis tällä kertaa on vain yksi) päätteeksi on vielä lopputoimenpiteenä 
 * katkaistava Mongoosen käyttämä tietokantayhteys. Tämä onnistuu helposti metodissa afterAll:
 */
afterAll(() => {
  mongoose.connection.close()
})