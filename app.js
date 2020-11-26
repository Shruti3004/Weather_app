const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

forecast(20236, (error, data) => {
    if(error){
        console.log(error);
    } else{
        console.log(data);
    }
})
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
