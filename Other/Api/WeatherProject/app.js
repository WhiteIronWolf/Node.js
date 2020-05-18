const http = require('http');
const express = require('express');
const app = express();
// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended: true}));
let url = 'http://api.weatherstack.com/current?access_key=8c957241e3bb1e53e6ebe494b42e8318&query=Kolding&units=m'

app.get('/', function (req, res) {
    http.get(url, function (response) {

        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data)
            const city = weatherData.location.name; 
            const temp = weatherData.current.temperature;
            res.send(`The temparature in ${city} is ${temp}`)   
        })
    })
});

app.listen(3000, function () {
    console.log('Running on port : 3000');
});