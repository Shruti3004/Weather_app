const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')
const location = require('./utils/location')

// geocode('Varanasi, Uttar Pradesh', (error, result) => {
//     if(error){
//         console.log(`Error: ${error}`)
//     } else{
//         console.log(`Data: ${result}`)
//     }
// });
// On return the function will end
const address = process.argv[2];
if(!address){
    console.log('Enter the valid location')
} else{
    location(address, (error, {key, location}) => {
        if(error){
            return console.log(`Error: ${error}`)
        }
        forecast(key, (error, data) => {
            if(error){
                return console.log(error);
            } 
            console.log(data, location);        
        });
    });
}


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
