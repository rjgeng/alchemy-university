# CLASSES 4: Super Warrior

-   [CLASSES 4: Super Warrior](https://university.alchemy.com/course/js/sc/5dad0494a54be5305b6b3297/stage/5dad10eea54be5305b6b32a4)

Let's continue with the example from the previous stage. We have a `Shape` class and a `Rectangle` class that extends it.

If we wanted to add new properties to our rectangle, we could do so in the constructor:

```
class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
        this.height = 10;
        this.width = 5;
    }
}
```

Notice the use of the keyword **super**. When invoked, this calls the constructor on `Shape`.

>   🔍 Subclasses **must** call super before accessing `this` inside the constructor or JavaScript will [throw a reference error](./Calling-Super.md).

Now `Rectangle` will have properties from both constructors:

```
const rectangle = new Rectangle();

console.log(rectangle.position.x); // 0
console.log(rectangle.height); // 10
console.log(rectangle.width); // 5
```

##  🏁 Your Goal: Add Rage

Add a `rage` property to the `Warrior`. The value of `rage` will start at `0`.

```
const warrior = new Warrior();

console.log(warrior.rage); // 0
```

## CodeBase

-   [Warrior.js](Warrior.js)
-   [Hero.js](Hero.js)
-   [index.js](index.js)
-   [test.js](test.js)

## Run start and test

```
npm run test
```

```
npm run start
```