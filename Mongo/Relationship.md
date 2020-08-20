# Relationships
```javascript
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
```