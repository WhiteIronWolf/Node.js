const request = require('postman-request');
const chalk = require('chalk');
const url = 'http://api.weatherstack.com/current?access_key=8c957241e3bb1e53e6ebe494b42e8318&query=Kolding';

request({ url: url, json: true }, function (error, response, body) {
    if (error) {
        console.log(chalk.red.inverse('Unable to connect to the Weatherstack server!')); // Print the error if one occurred   
    } else if (response.body.error) {
        console.log(chalk.yellow.inverse('Wrong input in the URL!'));
    } else {
        console.log(chalk.green.inverse(`Connected to : ${response.body.request.query}`));        
    } 
}); 