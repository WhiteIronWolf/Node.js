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

# Template Engine
Den første template engine guide vil være omkring **EJS**.
# EJS 
https://github.com/mde/ejs/wiki/Using-EJS-with-Express
## Basic setup
```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  var message = "Hello World"; 
  res.render('index', {someMessage: message});
});

app.listen(4000, function(){
    console.log('Example app listening on port 4000!')}
    );
```
---

## Opret folder
Opret en folder ved navn **views** vigtigt at det staves præcis sådan. I den folder skal alle EJS filer oprettes.

---

## Eksempel fra basic setup
Resultatet på index.ejs siden vil være: Hello World and welcome to this site!
```
<p> <%= someMessage %> and welcome to this site! </p>
``` 