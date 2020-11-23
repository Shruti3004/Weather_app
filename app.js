const request = require('request');

const url ="http://dataservice.accuweather.com/currentconditions/v1/202396?apikey=K77ESaJGE8NH6Hy2BlfZDSFeym2cxHKG"

request({url}, (error, response) => {
    const data = JSON.parse(response.body) 
    console.log(data[0].Temperature)
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
