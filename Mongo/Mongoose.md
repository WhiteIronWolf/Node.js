# Mongoose

## Setup
#### `Install mongoose`
First install mongoose as an npm package
##### `npm i mongoose`

---
#### `Require moongoose`
```javascript
const mongoose = require("mongoose");
```
#### `Create or connect to mongo database`

```javascript
mongoose.connect('mongodb://localhost:27017/moviecollectionDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```
---
#### `Mongoose Schema`
```javascript
const movieSchema = new mongoose.Schema({
    name: String,
    description: String,
    releasedate: Number,
    review: Number,
});
```
#### The permitted SchemaTypes are:
- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Decimal 128
- Map

#### `Mongoose Model`
The Model defines what schema we want to work with and what the Model should be named: `mongoose.model(modelName, schema)`

Converting movieSchema into a model:
```javascript
const Movie = new mongoose.model('Movie', movieSchema);
```
---
## C.R.U.D (create, read, update, delete)
The docs shows all the model methods to use if needed.
 
https://mongoosejs.com/docs/api/model.html

#### `Create`
```javascript
const movie = new Movie ({
    name: "Howl's Moving Castle",
    description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    releasedate: 2004,
    review: 8.2,
});

movie.save(); // Don't run this twice
```

#### `Read`
```javascript
Movie.find(function(err, movies){
    if (err) {
        console.log(err);
    } else {
        console.log(movies);   
    }
})
```
#### `Update`
```javascript
Movie.updateOne({ _id: '5ec91d30c61be7203c139f66' }, { review: 8.7 }, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('updated one of the movie collections');
    }
});
```
#### `Delete`
```javascript
Movie.deleteOne({ _id: '5ec91d30c61be7203c139f66' }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('deleted one of the movie collections');
    }
})
```
---