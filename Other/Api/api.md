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
# API
## How to fetch JSON data
### This is the node.js file
```javascript
const http = require("http");
const url = require("url");
const fs = require("fs");


const data = fs.readFileSync(`${__dirname}/file.json`, "utf-8")
const personData = JSON.parse(data);

console.log(personData[0].firstName); // Jacob

const server = http.createServer(function (req, res) {
    let pathName = req.url
    
    if (pathName === "/api") {
        res.writeHead( 200, {"Content-type": "application/json"} );
        res.end(data);
    
    } else {
        res.writeHead( 404, {"Content-type": "text/html"} );
        res.end("<h1>This page could not be found</h1>");
    }
})

server.listen(3000, function () {
    console.log("The server is running on port: 3000");
});
```
### This is the json file
```json
[{
        "id": 0,
        "firstName": "Jacob",
        "lastName": "Doe",
        "age": 50,
        "eyeColor": "blue"
    },
    {
        "id": 1,
        "firstName": "Christian",
        "lastName": "Doe",
        "age": 55,
        "eyeColor": "green"
    }
]
```