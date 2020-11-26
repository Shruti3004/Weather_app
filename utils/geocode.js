const request = require('request');

const geocode = (address, callback) => {
    const newUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2hydXRpYWdhcndhbDMwIiwiYSI6ImNraHY1bDNiczFhbmYycmxodWFoMHZxYXYifQ.TC5c58DMuOAM2MCiYwhS2A&limit=1`
    request({url: newUrl, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to the desire API', undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to find location', undefined)
        } else{
            callback(undefined, `${response.body.features[0].center}, ${response.body.features[0].place_name}`)
        }
    })
}

module.exports = geocode;
