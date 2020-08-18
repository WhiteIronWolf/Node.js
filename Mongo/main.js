const express = require("express");
const mongoose = require("mongoose");
// const Movie = require("./models/movie");
const movies = require("./controllers/moviesController");

const app = express();


// Create or connect to mongo database 
mongoose.connect('mongodb://localhost:27017/moviecollection', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/", function (req, res) {
    res.send("Home site")
}) 

app.get("/movies", movies.getAllMovies, function (req, res, next) {
    console.log(req.data);
    res.send(req.data)
})

// Movie.find(function(err, movies){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(movies);   
//     }
// })

app.listen(3000, function () {
    console.log("Running on port 3000");
})