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