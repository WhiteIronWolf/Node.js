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
# Server
### How to create a server
```javascript
const http = require("http");

const server = http.createServer( function(req, res) {
    res.end("Hello from the server!")
})

server.listen(3000, function(){
    console.log("The server is running on port 3000");
    
});
```