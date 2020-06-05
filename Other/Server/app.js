const http = require("http");

// Server
const server = http.createServer(function (req, res) {
    let pathName = req.url;
    
    // Overview page
    if (pathName === "/" || pathName === "/overview") {
        res.writeHead( 200, {"Content-type": "text/html"} );
        res.end('<h1>This is the overview page</h1>');
    }
    // Contact page
    else if (pathName === "/contact") {
        res.writeHead( 200, {"Content-type": "text/html"} );
        res.end('<h1>This is the contact page</h1>');
    }
    // Not Found
    else {
        res.writeHead( 404, {"Content-type": "text/html"} );
        res.end("<h1>This page could not be found</h1>");
    }
});

// Server port
server.listen(3000, function () {
    console.log("The server is running on port: 3000");
});