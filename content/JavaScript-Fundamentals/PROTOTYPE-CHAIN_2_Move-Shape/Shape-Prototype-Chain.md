# Shape Prototype Chain

Shape Prototype Chain

```
function Shape(x,y) {
    this.position = { x,y }
}

Shape.prototype.move = function(x,y) {
    // move the shape
}
```

The function `Shape` will have a `prototype` object that we can attach methods to. By adding a method `move` here, we are simply making `move` available to every new `Shape` instance:

```
const shape = new Shape(0,0);

console.log(typeof shape.move); // function
```

Internally, shape is linked to Shape.prototype, which allows us to access the move function via the prototype mechanism. Cool, huh? 😎

>   ⛓️ When looking up properties, the JavaScript engine would first look for `move` on the `shape` instance. If not found, the engine will check `Shape.prototype`, and finally O`bject.prototype` at the top of this prototype chain. In this case, `move` is on `Shape.prototype` so it will use that value.