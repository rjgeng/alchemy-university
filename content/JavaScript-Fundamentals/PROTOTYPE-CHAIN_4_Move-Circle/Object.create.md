# Object.create

The [Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) is a very convienent method for linking our prototypes. It can link prototypes with just plain old JavaScript objects!

```
const car = {
    make: 'Toyota',
    model: 'Camry',
}

const camry = Object.create(car);

console.log(camry.make); // Toyota
console.log(camry.model); // Camry
```

To illustrate how this is simply just linking objects, let's consider what would happen if we changed the car properties:

```
const car = {
    make: 'Toyota',
    model: 'Camry',
}

const camry = Object.create(car);

console.log(camry.make) // Toyota

car.make = "Not Toyota"

console.log(camry.make) // Not Toyota
```

Notice how when we changed the prototype of `camry`, its properties changed as well! The property `make` doesn't exist on `camry` itself. It exists on the `car` and `camry` is simply linked via the prototype chain to `car`. They essentially share this property.

We can use this same method to link prototypes of Objects so that new instances will have a longer prototype chain:

```
function Shape(x,y) {
    this.position = { x,y }
}

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
```

By setting `Circle.prototype` to the new object returned by `Object.create` we are linking it up to the `Shape.prototype` as well. Each `new Circle()` will now inherit methods and properties off of the `Shape.prototype`, much like a `new Shape()` would.