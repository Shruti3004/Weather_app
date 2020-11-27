const https = require('https');
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/dsghj.json?access_token=pk.eyJ1Ijoic2hydXRpYWdhcndhbDMwIiwiYSI6ImNraHY1bDNiczFhbmYycmxodWFoMHZxYXYifQ.TC5c58DMuOAM2MCiYwhS2A&limit=1"

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk.toString();
    })
    response.on('end', () => {
        console.log(JSON.parse(data))
    })    
});
request.on('error', (error) => {
    console.log(`An error: ${error}`)
})
request.end()