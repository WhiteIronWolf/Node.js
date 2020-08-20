# Path

`__dirname` tells you the absolute path of the directory containing the currently executing file.

Try `console.log(__dirname)` to see the result if confused.
``` javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});
 
app.listen(3000);
```