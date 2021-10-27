/* 
HTTP-pyyntöjen tiedot konsoliin kirjoittava middleware häiritsee hiukan testien tulostusta. 
Muutetaan loggeria siten, että testausmoodissa lokiviestit eivät tulostu konsoliin.
if (process.env.NODE_ENV !== 'test')
*/

const info = (...params) => {
    if (process.env.NODE_ENV !== 'test') { 
      console.log(...params)
    }
  }
  
  const error = (...params) => {
    if (process.env.NODE_ENV !== 'test') { 
      console.error(...params)
    }
  }

module.exports = {
    info, error
}