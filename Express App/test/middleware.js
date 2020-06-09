const express = require('express')
const app = express()

let time = function (req, res, next) {
  req.messageTime = 'Here is the time!';
  req.requestTime = Date.now();
  next()
}

app.use(time)

app.get('/', function (req, res) {
  res.send('Home!')
})

app.get('/time', function (req, res) {
  console.log(req.messageTime);
  console.log(req.requestTime);
  res.send('time')
})

app.listen(3000, function () {
  console.log('Server is running');
})
