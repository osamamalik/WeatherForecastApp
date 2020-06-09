const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const access_key = '60bd5921939f3dd96f5e925a8a3f24c6' // get free key from weatherstack.com
    const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees. The humidity is ' + body.current.humidity + '% and the precipitation is ' + body.current.precip + '.')
        }
    })
}

module.exports = forecast