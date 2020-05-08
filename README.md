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

# Node.js


# NPM body-parser
https://www.npmjs.com/package/body-parser
## how to install
```
$ npm install body-parser
```
## POST request
Når vi opretter en **POST request** på siden igennem vores form fortæller vi vores "Express" app objekt hvordan den skal håndtere den kommende POST request.
```html
<h1>Calculator</h1>

<form action="/" method="post">
    <input type="text" name="num1" id="" placeholder="first number">
    <input type="text" name="num2" id="" placeholder="second number">
    <button type="submit" name="submit">Calculate</button>
</form>
```
```javascript
app.post("/", function(req, res){
    res.send("thanks for posting");
});
```
## Form data
For at man kan anskaffe data fra ens form bliver nødt til at bruge body-parser. Express arbejder sammen med body-parser, så for at fortælle vores "Express" app objekt at vi vil gerne bruge body-parser skriver vi ind denne kode:
```javascript
app.use(bodyParser.urlencoded({extended:true}));
```
### **Test**
Hvis vi anvender vores forrige form og bruger denne kode, får vi logget ud i terminalen vores form data fra browseren. 
```javascript
app.post("/", function(req, res){
    console.log(req.body)
});
```
```
PS C:\Users\jacob\Documents\GitHub\Node.js\projects\Calculator> node calculator
server started on port 3000
{ num1: '5', num2: '10', submit: '' }
```
Så for at hente vores data ned fra vores form og derefter bruge det kan vi eksempelvis skrive koden: 
```javascript
app.post("/", function(req, res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var result = Number(num1) + Number(num2);
    
    res.send("thanks for posting, your result is: " + result);
});
```