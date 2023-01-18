# PROTOTYPE CHAIN 3: Circle Shape

-   [PROTOTYPE CHAIN 3: Circle Shape](https://university.alchemy.com/course/js/sc/5d7698b6e5a95ac05652f732/stage/5d76ef2d09d5ed335cbf08dd)

## Sharing Functionality

We're moving on to a new shape: `Circle`! You can find the definition started in your `Circle.js` tab.

`Circle` will be similar to `Shape`. The only addition is a new `radius` property. Since these prototypes will be so similar, we'll invoke `Shape` in our `Circle` function.

#   🏁 Your Goal: Complete the Circle Function

In `Circle.js`, you'll need to do two things:

1.  Pass the arguments to `Shape` via [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call).

>   👁️ Notice we are binding `Circle` with `this` using `call`. This way when `Shape` is invoked, it will store `x` and `y` on the `Circle` instance!

2.  Store `radius` on our `Circle` instance. You can do this exactly how we stored `position` on the `Shape` class.

The final result behavior should be:

```
const circle = new Circle(5,10,15);

console.log(circle.position.x); // 5
console.log(circle.position.y); // 10
console.log(circle.radius); // 15
```

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
