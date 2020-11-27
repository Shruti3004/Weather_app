const path = require('path');
const express =  require('express');
const app = express();

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath))

// express identifies the object and stringify it as json
app.get('/help', (req, res) => {
    res.send([{
        name: 'Shruti',
        age: 19
    },
    {
        name: 'Andrew',
        age: 27
    }])
});

app.get('/about', (req, res) => {
    res.send('<h3>About page</h3>')
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'Boston',
        forecast: 50
    })
});
// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})