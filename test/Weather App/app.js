const request = require('postman-request');
const chalk = require('chalk');

request('http://api.weatherstack.com/current?access_key=8c957241e3bb1e53e6ebe494b42e8318&query=Kolding', function (error, response, body) {
    if (error) {
        console.log(chalk.red.inverse('Unable to connect to the Weatherstack server!')); // Print the error if one occurred   
    } else {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        const data = JSON.parse(body);
        console.log(data);
    }
}); 