const request = require('request');

const location = (address, callback) => {
    const url =`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=K77ESaJGE8NH6Hy2BlfZDSFeym2cxHKG&q=${encodeURIComponent(address)}`
    request({url, json: true}, (error, response) => {  
        if(error){
            callback('Unable to connect to the desire API')
        } else if(response.body.length === 0){
            callback('Unable to find location')
        } else{
            callback(undefined, {
                key: response.body[0].Key,
                location: response.body[0].LocalizedName
            })
            // console.log(response.body)
        }
    });
}

module.exports = location