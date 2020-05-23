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
    date: Number,
    review: Number,
    year: Number,
});

// Mongoose Model
const Movie = new mongoose.model('Movie', movieSchema);

// Create
const movie = new Movie ({
    name: "Howl's Moving Castle",
    description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    date: 2004,
    review: 8.2,
    year: 2004,
});

// movie.save();

// Read
Movie.find(function(err, movies){
    if (err) {
        console.log(err);
    } else {
        console.log(movies);
        
    }
})

// Update