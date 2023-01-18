# PROTOTYPE CHAIN 4: Move Circle

-   [PROTOTYPE CHAIN 4: Move Circle](https://university.alchemy.com/course/js/sc/5d7698b6e5a95ac05652f732/stage/5d77bc2109d5ed335cbf08e0)

##  Linking Prototypes

What would happen if we tried to call `.move` function on our `Circle` instance like the code below?

```
const circle = new Circle(5,10,15);

circle.move(1,1); // what happens?
```

If you're not sure, you can try it out by running the test cases now! ▶️

You'll likely see an error: `TypeError: circle.move is not a function.` 😱

Even though we use the `Shape` function to store the variables `x` and `y` on our `Circle`, **we did not link to the Shape prototype!**

This is where the *awesome* `Object.create` method comes in:

```
Circle.prototype = Object.create(Shape.prototype);
```

Now our Circle prototype inherits methods from the Shape Prototype! Any new circle will have a 'move' method.

>   🔍 Object.create is used to [link our prototypes](./Object.create.md) within the prototype chain.

##  🏁 Your Goal: Link the prototypes

Use `Object.create` to link `Circle.prototype` to `Shape.prototype`.

This will ensure that any methods on `Shape.prototype` will also become available on new `Circle` instances. For instance, we'll be able to use `circle.move(1,1)`; just like we did on the shape instance!

## CodeBase

-   [Circle.js](Circle.js)
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
