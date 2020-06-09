const bodyParser = require("body-parser")
var express = require('express')
var app = express()

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
    
    //// Ends the response process. //// 
    // res.end('No data send back sorry!')
    

    //// Send a response of various types. ////
    // res.send({ some: 'json'})
    // res.send('<p>some html</p>')
    // res.status(404).send('Sorry, we cannot find that!')
    // res.status(500).send({error: 'something blew up'})

    //// Send a file as an octet stream. ////
    res.sendFile(`${__dirname}/index.html`)

    //// Render a view template. ////
    // res.render('index', {someMessage: message});

    //// Redirect a request ////
    // res.redirect('/foo/bar')
    // res.redirect('http://example.com')
    // res.redirect(301, 'http://example.com')
    // res.redirect('../login')

    //// Send a JSON response. ////
    // res.json({ user: 'tobi' })
    // res.status(500).json({ error: 'message' })
})

app.post("/", function (req, res) {
    const a = req.body.firstNumber;
    const b = req.body.secondNumber
    let result = Number(a) + Number(b);
    console.log(result)
    res.send(`The result is: ${result}`)
})

app.listen(3000, function () {
    console.log('Server started on port 3000');
})