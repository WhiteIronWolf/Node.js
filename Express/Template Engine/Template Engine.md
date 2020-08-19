# Template Engine
A template engine enables you to use static template files in your application. 

At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. 

#### `Not to be confused`
- a template is the same as a template file.
- because rendering a template results in what the viewer sees on their screen templates are often called views.

JavaScript template languages (Template engines)
* Handlebars
* EJS
* Pug (Formerly Jade)

#### `Update application settings`
The code explains express what template engine to use.
```javascript
app.set('view engine', 'ejs');
```