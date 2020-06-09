const mongoose = require("mongoose");

// Mongoose Schema
const movieSchema = new mongoose.Schema({
    name: String,
    description: String,
    releasedate: Number,
    review: Number,
});

// Mongoose Model
module.exports = new mongoose.model('Movie', movieSchema);

