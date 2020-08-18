const mongoose = require("mongoose");

const Movie = require("../models/movie");

exports.getAllMovies = function (req, res, next) {
    Movie.find(function(err, movies){
        if (error) next (error);
        req.data = movies; 
    }); 
};