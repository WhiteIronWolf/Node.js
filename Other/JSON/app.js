const fs = require('fs');

// Get data from JSON file
const dataBuffer = fs.readFileSync('./file.json')

// Parse the data
const data = JSON.parse(dataBuffer.toString());
console.log(data.name);

// Modify data
data.name = 'Jacob';
data.age = 24;
console.log(data)

// Create new modified JSON file 
const newUser = JSON.stringify(data);
fs.writeFileSync('file2.json', newUser)