# Prototype Chain

Let's consider a simple example:

```
function Animal(name) {
    this.name = name;
}

const animal = new Animal("Bud");
```

The animal here will already have some methods available: `valueOf`, `hasOwnProperty`, `toString` and more depending on your JavaScript environment. Where do these methods come from?

They come from [Object.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). This is the top of the prototype chain for every object in JavaScript.

**Note** that these methods are not created anew for every object! They are actually the same methods:

```
const animal = new Animal("Bud");
const animal2 = new Animal("Lassie");

console.log(animal.hasOwnProperty === animal2.hasOwnProperty); // true
```

First, the JavaScript engine will look up to see if the animal instances have a method `hasOwnProperty`. Then it will look on the `Animal.prototype`. If not, it will continue to `Object.prototype` and find the method there.

Since both `animal` and `animal2` refer to the `hasOwnProperty` method on `Object.prototype`, the reference is equal and returns `true` above.

**Syntax Example** 

Let's take a look at how prototypes are traditionally used:

```
function Car(make, model) {
    this.make = make;
    this.model = model;
}

const car = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

console.log(car.make) // Toyota
console.log(car2.model) // Civic
```

Here `Car` is just a regular JavaScript function. Often it is referred to as a **constructor** function, although it is not a special function by any means! **It is capitalized purely by convention**. We capitalize it to show we plan to use it with the `new` operator.

Using the `new` operator we can create new **instances** of `Car`. The `new` operator will create a new object and set it to `this` within the `Car` function in the example above. Implicitly, `new` will also return this object (if no other object is returned).

>   📖 In **This Keyword** we went over rules for binding `this`. Using `new` is another rule for how it is bound. In this case, the new instance of the car is used for `this` in the constructor function.

Both `Car` instances will have the properties `make` and `model` and will store them from the arguments passed into the constructor call.