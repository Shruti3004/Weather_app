const request = require('request');

const forecast = (locationKey, callback) => {
    const url =`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=K77ESaJGE8NH6Hy2BlfZDSFeym2cxHKG`
    request({url, json: true}, (error, response) => {  
        if(error){
            callback('Unable to connect to the desire API')
        } else if(response.body.Code){
            callback('Unable to find location')
        } else{
            callback(undefined, response.body[0].Temperature)
        }
    });
}

module.exports = forecast