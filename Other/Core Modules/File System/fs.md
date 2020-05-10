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


# File System
## Blocking (Synchronous)
### This reads a file
#### ```fs.readFileSync()```
```javascript
const fs = require("fs");

const txtInput = fs.readFileSync("./input.txt");
console.log(`This is the text input: ${txtInput}`);

// This is the text input: "Lorem ipsum dolor sit amet 😉😮"
```
### This creates a file
```fs.writeFileSync()```
```javascript
const fs = require("fs");

fs.writeFileSync("./textFile.txt", "I created some text in a txt file!");
```


---


## Non-blocking (Asynchronous)
### This reads a file
```fs.readFile()```
```javascript
const fs = require("fs");

fs.readFile("./file.txt", "utf-8", function(err, data) {
    console.log(data)
});

// This is the data!
```
### This creates a file
```javascript
const fs = require("fs");

fs.writeFile("./file.txt", "I created some text in a txt file!" ,"utf-8", function(err) {
    console.log("Your file has been created")
});
```


---


# Other fs methods
## Blocking
### This modifies a file
``appendFileSync()``
```javascript
const fs = require("fs");

fs.appendFileSync("note.txt", " Then I used append file to add some more text.");
```
From the txt file ``[Example]``
```
First I created a txt file. Then I used append file to add some more text.
```