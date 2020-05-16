<style>
    body {
        color: white;
    }
    h1, h3 {
         /* offset-x | offset-y | blur-radius | color */
        box-shadow: 4px 4px 15px black;
         /* top | right | bottom | left */
        padding: 5px 5px 5px 5px;
        font-weight: bold;
    }

    h2 {
        border-left: 5px solid grey;
        padding-left: 10px;
        color: #4EDFB0;
    }
</style>

# NPM [Packages]
## validator
``npm i validator``
### Usage [Example]
``` javascript
const validator = require("validator");

console.log(validator.isEmail('jacob@gmail.com')); // true
```


---


## chalk
``npm i chalk``
### Usage [Example]
``` javascript
const chalk = require('chalk');
 
console.log(chalk.green('Success!'));
```


---


## postman-request
``npm i postman-request``
### Usage [Example]
``` javascript
const request = require('postman-request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body); 
  // Print the HTML for the Google homepage.
});
```

---


## Express
``npm i express``
### Usage [Example]
``` javascript
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
```