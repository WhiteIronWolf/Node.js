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

# Import own modules
## Basic
### app.js | ``import``
```javascript
const name = require("./names.js");

console.log(name)

// Lovia Frempong
```
### names.js | ``export``
```javascript
const name_1 = "Jacob Krag";

const name_2 = "Christian Krag";

const name_3 = "Lovia Frempong";

module.exports = name_3;
```
## Functions
### app.js | ``import``
```javascript
const mathDouble = require("./double.js");

console.log(mathDouble(2));
```
### double.js | ``export``
```javascript
function double(a) {
    return a * 2;    
}

module.exports = double;
```

## Objects
### app.js | ``import``
```javascript
Coming soon
```
```javascript
Coming soon
```


--- 


## Creating a module from book:
```javascript
exports.messages = ["You are great!", "You can accomplish everything!", "Success is in your future"];
```
### Importing module
```javascript
const messageModule = require('./messages');
messageModule.messages.forEach( function ( i ) {
    console.log(i)
});

// You are great!
// You can accomplish everything!
// Success is in your future
```