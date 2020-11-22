console.log('Starting');
setTimeout(() => {
    console.log('2 second timer');
}, 2000);
setTimeout(() => {
    console.log('0 second timer');
}, 0);
console.log('Stopping');
console.log('Stopping');
console.log('Stopping');
console.log('Stopping');
console.log('Stopping');
console.log('Stopping');
console.log('Stopping');
console.log('Stopping');

// Output
// Starting
// Stopping
// Stopping
// Stopping
// Stopping
// Stopping
// Stopping
// Stopping
// Stopping
// 0 second timer
// 2 second timer
