function thisName() {
    return this.name;
}

const newFunction = thisName.bind({ name: 'Ted' }); 

console.log(newFunction()); // Ted
console.log(thisName()); // undefined