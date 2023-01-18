const removeSecret = require('./removeSecret.js');

const person = {
    name: "Alice",
    secret: "afraid of the dark"
}

console.log(removeSecret(person)) // 
console.log(person.name) // 
console.log(person.secret) // 

