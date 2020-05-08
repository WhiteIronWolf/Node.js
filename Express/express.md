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

# Express.js
https://expressjs.com/en/4x/api.html

Installering af express:
```
$ npm install express
```

Opsætning af express:
```javascript
const express = require("express");

const app = express();
```

## Opsætning af port
```javascript
const express = require("express");

const app = express();

app.listen(3000, function() {
    console.log("Server started on port 3000")
})
```

## GET request
Ved ```app.get()``` fortæller vi vores "Express" app objekt, vejen til hvordan den skal håndtere en **GET request**. 
```javascript
const express = require("express");

const app = express();

app.get("/", function(request, response){
    res.sendFile(__dirname + "/index.html")
});

app.listen(3000, function() {
    console.log("Server started on port 3000")
});
```
---