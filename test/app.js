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