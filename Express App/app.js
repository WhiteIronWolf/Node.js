const express = require("./node_modules/express");
const bodyParser = require("./node_modules/body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = Number(num1) + Number(num2);
    res.send("thanks for posting, your result is: " + result);
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});