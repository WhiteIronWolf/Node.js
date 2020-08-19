# Route 

Express handles request through routes.
A Route is just like URL:
* website.com/home
* website.com/about
* website.com/contact

It's called a route, because it's the path a user / client takes to access data on a server.

---
## GET Request
When a user wants to visit a site they are making a GET request to the server.
#### `Server respond`
A server needs to respond to a GET request by sending information back to the user in the form of a web page.  

### `Code example`
The `app.get()` method is used to handle a GET request. 

The method needs two parameter values specified down below:

`app.get( [path], [callback function] )`

The homepage of a site is the root route of a page: `app.get('/')`
``` javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
});
 
app.listen(3000);
```
---
## POST Request
When a user is submitting a form on a website, they are making a POST request to the server
#### `Server respond`
In the same way as a GET request the server is also obliged to handle a POST request.

### `Code example`
The `app.post()` method is used to handle a POST request. 

The method needs two parameter values specified down below:

`app.post( [path], [callback function] )`

``` javascript
const express = require('express');
const app = express();

app.post('/', (req, res) => {
    res.send('Post received')
});
 
app.listen(3000);
```

## Response methods
Method | Descriptions
---------|----------
 `res.download()` | Prompt a file to be downloaded.
 `res.end()` | End the response process.
 `res.json()` | Send a JSON response.
 `res.redirect()`| Redirect a request.
 `res.render()` | Render a view template.
 `res.send()` | Send a response of various types.
 `res.sendFile()` | Send a file as an octet stream.
 `res.sendStatus()` | Set the response status code and send its string representation as the response body.