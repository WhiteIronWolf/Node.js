# EJS 

## Setup

#### `Update application settings`
The code explains express what template engine to use.
```javascript
app.set('view engine', 'ejs');
```
#### `How to render a template file`
The `res.render()` method is used to render a template file.
```javascript
app.get('/', (req, res) => {
  var message = "Hello Stranger..."; 
  res.render('index');
});
```

#### `Template files placement`
The default placement where express knows where to render your **templates will always be in the views folder** unless
you change it through the `app.set()` method.

---

### How to send dynamic data
The `res.render(view [, locals] [, callback])` method have two parameter options avaiable to offer.
#### `locals`
(locals, an object whose properties define local variables for the view.) - expressjs.com

In other words locals can help us send dynamic data.

#### `First option`
Use an object as the second value to the parameter. 
```javascript
app.get('/', (req, res) => {
  res.render( 'index', {message: 'Hello Stranger...'} );
});
```
#### `Second option`
```javascript
app.get('/', (req, res) => {
  res.locals.headline = 'Merchant'
  res.locals.message = 'Hello Stranger...'
  res.render('index');
});
```

#### `From the template file`
```html
<h1> <%= headline %> </h1>
<p> <%= message %> What are you buying, Stranger... </p>

 <!-- Hello Stranger... What are you buying, Stranger  -->
``` 