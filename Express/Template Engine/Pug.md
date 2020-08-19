# Pug

## Setup

#### `Update application settings`
The code explains express what template engine to use.
```javascript
app.set('view engine', 'pug');
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
```pug
doctype html
html(lang="en")
  head
    title Landing Page
  body
    h1 headline
    p some text
```

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
  res.render( 'index', {headline: 'Hello World!'} );
});
```
#### `Second option`
```javascript
app.get('/', (req, res) => {
  res.locals.headline = 'Hello World!'
  res.locals.message = 'This is the message!'
  res.render('index');
});
```
#### `From the template file`
```pug
doctype html
html(lang="en")
  head
    title Landing Page
  body
    h1= headline
    p #{message}
```

---

### Using Logic in Pug
```pug
doctype html
html(lang="en")
  head
    title Landing Page
  body
    h1= headline
    if message === true
      p #{message}
    else
      p there is no message
```
