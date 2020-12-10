// It will only restart the server when we make changes in app.js for reloading it when other files will change we have to run the command "nodemon src/app.js -e js,hbs" where e is the shorthand for extension
const path = require('path');
const express =  require('express');
const hbs = require('hbs');
const forecast = require('./utils/forecast')
const location = require('./utils/location')

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewDirectoryPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

// Setup Handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewDirectoryPath);

hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// render allows us to render one of our views
app.get('', (req, res) => {
    res.render('index', {
         title: 'Weather App',
        name: 'Shruti Agarwal'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Shruti Agarwal'
    })
})
app.get('/products', (req, res) => {
    // console.log(req.query)
    if(!req.query.search){
        return res.send({
            error: 'You must provide an search query'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address query'
        })
    }
    location(req.query.address, (error, result) => {
        if(error){
            return res.send({
                error
            })
        }
        forecast(result.key, (error, data) => {
            if(error){
                return res.send({
                    error
                })
            }
            res.send({
                data,
                location: result.location
            });
        });
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Shruti Agarwal'
    })
})
app.get('/help/*', (req, res) => {
    res.render('help404', {
        title: 'Help article not found'
    })
})


// * is a wild card character which depicts if it does not match any of the route it will come into play
app.get('*', (req,res) => {
    res.render('404', {
        title: '404 Page'
    })
})

// express identifies the object and stringify it as json
// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Shruti',
//         age: 19
//     },
//     {
//         name: 'Andrew',
//         age: 27
//     }])
// });

// app.get('/about', (req, res) => {
//     res.send('<h3>About page</h3>')
// });


// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})