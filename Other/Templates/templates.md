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
# Templating
### Javascipt file
```javascript
const http = require("http");
const url = require("url");
const fs = require("fs");

// JSON
const data = fs.readFileSync(`${__dirname}/file.json`, "utf-8")
const personData = JSON.parse(data);

// HTML
const overview = fs.readFileSync(`${__dirname}/index.html`, "utf-8");

// Server
const server = http.createServer(function (req, res) {
    let pathName = req.url;
    
    // Overview page
    if (pathName === "/" || pathName === "/overview") {
        res.writeHead( 200, {"Content-type": "text/html"} );
        const output = overview.replace("{%TEXT%}", personData[0].text); // Replaces the text from the html page with our JSON Data.
        res.end(output);
    } 
    // Not Found
    else {
        res.writeHead( 404, {"Content-type": "text/html"} );
        res.end("<h1>This page could not be found</h1>");
    }
})

// Server port
server.listen(3000, function () {
    console.log("The server is running on port: 3000");
});
```
### HTML file
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            color: red;
            text-align: center;
            padding: 50px;
            background-color: #f8f9fa;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-transform: uppercase;
            letter-spacing: 10px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Overview</h1>
    <p>{%TEXT%}</p>
</body>
</html>
```
### JSON file
```JSON
[{
        "id": 0,
        "firstName": "Jacob",
        "lastName": "Doe",
        "age": 50,
        "eyeColor": "blue",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "id": 1,
        "firstName": "Christian",
        "lastName": "Doe",
        "age": 55,
        "eyeColor": "green",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]
```