const request = require('request');
const geocode = require('./utils/geocode');

// const url ="http://dataservice.accuweather.com/currentconditions/v1/202396?apikey=K77ESaJGE8NH6Hy2BlfZDSFeym2cxHKG"

// request({url, json: true}, (error, response) => {  
//     if(error){
//         console.log('Unable to connect to the desire API')
//     } else if(response.body.Code){
//         console.log('Unable to find location')
//     } else{
//         console.log(response.body[0].Temperature)
//     }
// });
geocode('Varanasi, Uttar Pradesh', (error, result) => {
    if(error){
        console.log(`Error: ${error}`)
    } else{
        console.log(`Data: ${result}`)
    }
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
