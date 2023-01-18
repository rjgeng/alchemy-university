# PROTOTYPE CHAIN 2: Move Shape

-   [PROTOTYPE CHAIN 2: Move Shape](https://university.alchemy.com/course/js/sc/5d7698b6e5a95ac05652f732/stage/5d76cf3f09d5ed335cbf08d6)

##  Adding a Method

Let's make our shape move!

To add a method to our prototype, we can do this:

```
function Shape(x,y) {
    this.position = { x,y }
}

Shape.prototype.move = function(x,y) {
    // move the shape
}
```

By adding this method to the Shape.prototype object, new instances will be able to access it [via the prototype chain](Shape-Prototype-Chain.md).

>   ⚠️ Be careful not to use arrow function syntax here, or `this` may not be appropriately bound! We want `this` to be the instance of `Shape`. With the arrow syntax, it will inherit the context of the scope unless otherwise bound.

##  🏁 Your Goal: Add Move Function

Create a function `move` that will be added to the `Shape.prototype`. This function should take two arguments: `x` and `y`.

It should move the shape's `position` by adding the corresponding arguments value:

```
const shape = new Shape(1, 1);

shape.move(1, 4);

console.log( shape.position.x ); // 2
console.log( shape.position.y ); // 5
```

## CodeBase

-   [Shape.js](Shape.js)
-   [index.js](index.js)
-   [test.js](test.js)

## Run start and test

```
npm run test
```

```
npm run start
```