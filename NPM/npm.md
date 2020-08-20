# NPM 
[Go to : NPM packages](https://www.npmjs.com/)

## **NPM init**
Initializes a Node.js application and creates a package.json file 

``$ npm init``
Question | Answer
-------          | -------
```Package name```     | Name your project.
```Version```          | Version of your project.
```Description```      | Description of your project.
```Entry point```      | Your main entry point [app.js]
```Test command```     | ?
```Git repository```   | ?
```Keywords```         | ?
```Author```           | Your name or the author of the project.
```License```          | ISC
```Is this ok (yes)``` | Press **enter** for yes
---
### **Simple NPM install example**

```
$ npm install superheroes
```

```javascript
var superheroes = require("superheroes");

var superheroname = superheroes.random();

console.log(superheroname)

// Batman
```

---

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

---