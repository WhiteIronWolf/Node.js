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


# NPM 
[Go to : NPM packages](https://www.npmjs.com/)

## NPM Commands
Kommando | Udførsel 
------- | ------- 
```which npm```     | Where to find install of NPM
```npm init```      | Initializes a Node.js application and creates a package.json file 
```npm install [package]```   | Installs a Node.js package
```npm i [package]```   | Installs a Node.js package
```npm publish```   | Saves and uploads a package to the npm package community
```npm start```     | Runs your Node.js application
```npm stop```      | Quits the running application
```npm docs [package]```      | Opens the documentation page for your specified package


## **NPM init**
### Opsætter din package.json fil
```
$ npm init
```
Spørgsmål | Forklaring
-------          | -------
```Package name```     | Navngiv din pakke/projekt
```Version```          | Version af dit projekt? 
```Description```      | Beskrivelse af dit projekt.
```Entry point```      | Din hoved javascript fil
```Test command```     | ?
```Git repository```   | ?
```Keywords```         | ?
```Author```           | Dit navn
```License```          | ISC
```Is this ok (yes)``` | Tryk **enter** for ja

### **NPM install eksempel**

```
$ npm install superheroes
```

```javascript
var superheroes = require("superheroes");

var superheroname = superheroes.random();

console.log(superheroname)

// Batman
```