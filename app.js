const request = require('request');

// const url ="http://dataservice.accuweather.com/currentconditions/v1/202396?apikey=K77ESaJGE8NH6Hy2BlfZDSFeym2cxHKG"

// request({url, json: true}, (error, response) => {    
//     console.log(response.body[0].Temperature)
// });

const newUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hydXRpYWdhcndhbDMwIiwiYSI6ImNraHY1bDNiczFhbmYycmxodWFoMHZxYXYifQ.TC5c58DMuOAM2MCiYwhS2A&limit=1"

request({url: newUrl, json: true}, (error, response) => {
    console.log(response.body.features[0].center)
})


// console.log('Starting');
// setTimeout(() => {
//     console.log('2 second timer');
// }, 2000);
// setTimeout(() => {
//     console.log('0 second timer');
// }, 0);
// console.log('Stopping');
// console.log('Stopping');
// console.log('Stopping');
// console.log('Stopping');
// console.log('Stopping');
// console.log('Stopping');
// console.log('Stopping');
// console.log('Stopping');

// // Output
// // Starting
// // Stopping
// // Stopping
// // Stopping
// // Stopping
// // Stopping
// // Stopping
// // Stopping
// // Stopping
// // 0 second timer
// // 2 second timer
