const mongoose = require("mongoose");

// Create or connect to mongo database 
mongoose.connect('mongodb://localhost:27017/moviecollection', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Mongoose Schema
const movieSchema = new mongoose.Schema({
    name: String,
    description: String,
    releasedate: Number,
    review: Number,
});

// Mongoose Model
const Movie = new mongoose.model('Movie', movieSchema);

//////////////////////C.R.U.D//////////////////////

// Create
const movie = new Movie ({
    name: "Howl's Moving Castle",
    description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    releasedate: 2004,
    review: 8.2,
});

movie.save();

// Read
Movie.find(function(err, movies){
    if (err) {
        console.log(err);
    } else {
        console.log(movies);   
    }
})

// Update
Movie.updateOne({ _id: '5ec91d30c61be7203c139f66' }, { review: 8.7 }, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('updated one of the movie collections');
    }
});

// Delete
Movie.deleteOne({ _id: '5ec91d30c61be7203c139f66' }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('deleted one of the movie collections');
    }
})

//////////////////////Relationships//////////////////////

// Mongoose Schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteMovies: movieSchema
});

// Mongoose Model
const Person = new mongoose.model('Person', personSchema);

// Create
const ghibliMovie = new Movie ({
    name: "Spirited Away",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    releasedate: 2001,
    review: 8.6,
});

ghibliMovie.save();

const person = new Person ({
    name: 'Junico',
    age: 12,
    favouriteMovies: ghibliMovie
});

person.save();