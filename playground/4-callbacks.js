// Callback is a function which is passed inside the another function as an argument to be called later in the future
// It is asynchronous
setTimeout(() => {
    console.log('Two seconds are up')
}, 2000);

// It is synchronous (forEach, filter, map operators)
const names = ['Shruti', 'Jen', 'Jess'];
const shortNames = names.filter((name)=> {
    return name.length <= 4
});

// User defined function in which we are using callbacks
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            longitude: 0,
            latitude: 0
        }
        callback(data);
    }, 2000);    
}
geocode('Pilibhit', (data) => {
    console.log(data);
});

const add = (x, y, callback) => {
    setTimeout(() => {
        const sum = x + y;
        callback(sum)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum);
})