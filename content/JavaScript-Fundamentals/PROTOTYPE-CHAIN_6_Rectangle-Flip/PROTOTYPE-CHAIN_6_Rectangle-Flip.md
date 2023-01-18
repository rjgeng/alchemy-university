# PROTOTYPE CHAIN 6: Rectangle Flip

-   [PROTOTYPE CHAIN 6: Rectangle Flip](https://university.alchemy.com/course/js/sc/5d7698b6e5a95ac05652f732/stage/5d77d24c09d5ed335cbf08e9)

##  Adding a Prototype Method

Time to add a prototype method to `Rectangle`. This method will only make sense for rectangles, so we'll want to add it directly to `Rectangle.prototype`.

##  🏁 Your Goal: Create a Flip Function

Create a function `flip` on the rectangle prototype! This function will switch the `height` and `width` dimensions of the rectangle. It will take no arguments.

>   🔑 You may need to store a temporary variable in order to flip the dimensions!

Example:

```
const rectangle = new Rectangle(10, 20);

console.log(rectangle.height, rectangle.width); // 10, 20

rectangle.flip();

console.log(rectangle.height, rectangle.width); // 20, 10
```

>   ⚠️ Be careful you don't declare the method `flip` on `Rectangle.prototype` before using `Object.create`! The O`bject.create` method will return a completely new object to which you can attach the method.

## CodeBase

-   [Rectangle.js](Rectangle.js)
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
