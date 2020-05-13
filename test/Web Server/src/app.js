const path = require('path');
const express = require('express');
const request = require('postman-request');
const hbs = require('hbs');

const app = express();

// Define paths for Express configs
const publicFolder = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setups handlebars and view engines
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static dir to serve
app.use(express.static(publicFolder)) //css & img

app.get('', function(req, res) {
    res.render('index', {
        title: 'Weather',
        author: 'Jacob Krag' 
    })
})

// render JSON file
app.get('/api', function (req, res) {
    res.send();
});

app.get('*', function (req, res) {
    res.send('This site does not exist');
});

app.listen(3000, function () {
    console.log('The server is running on port : 3000');
});