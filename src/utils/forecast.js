const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query='+ address
 
     request({ url: url, json: true }, (error, response) => {
         if (error) {
             callback('Unable to connect to weather service', undefined)
         } else if (response.body.error) {
             callback(response.body.error.info, undefined)
         } else {
            console.log('Temporature '+response.body.current.temperature)
             callback(undefined, {
                temperature: response.body.current.temperature
             })
         }
     })
 }

 module.exports = forecast