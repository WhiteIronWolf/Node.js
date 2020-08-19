# Install Express
First create a folder. The folder is going to represent your entire project.

From your project, run the commands step by step inside your terminal:
Command | Explanation 
---------|----------
 `npm init -y` | Initializes a Node.js application and creates a package.json file 
 `npm i express` | Installs Express as a Node.js package.

---

## Create a server
First we need to use the `require()` method to require the npm package.

From the `express()` function we going to make a reference to it from our created variable 'app'.
So when using `app.listen()` it's actually the same as writing `express().listen()`.

The method `app.listen()` creates the server. The parameter value 3000 specifies on which port the server is running. 

#### `Usage [Example]`
``` javascript
const express = require('express')

const app = express()
 
app.listen(3000)
```

---