// const request = require('postman-request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=d78880199a76176718ed9919fdf51ca5&query=' + latitude + ',' + longitude + '&units=m'

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             console.log('Unable to connect to weather service')
//         } else if (response.body.error) {
//             console.log('Unable to find location')
//         } else {
//             const current = response.body.current
//             const temperature = (current.temperature)
//             const rain = (current.precip)
//             const description = (current.weather_descriptions[0])
//             console.log(description + '. It is currenly ' + temperature + ' degrees out. There is ' + rain + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast

const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1d42d4a22e90c491ea22eb7ca4ff57d3&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. There is " + body.current.precip + "% chance of rain.")
        }
    })
}

module.exports = forecast