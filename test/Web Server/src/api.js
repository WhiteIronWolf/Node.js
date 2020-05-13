const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=8c957241e3bb1e53e6ebe494b42e8318&query=Kolding';
request({ url: url, json: true }, function (error, response, body) {
    if (error) {
        console.log('Unable to connect to the Weatherstack server!'); // Print the error if one occurred   
    } else if (response.body.error) {
        console.log('Wrong input in the URL!');
    } else {
        console.log(`Connected to : ${response.body.request.query} API`);        
    } 
}); 

