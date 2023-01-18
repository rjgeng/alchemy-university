#   CLASSES 3: Warrior

-   [CLASSES 3: Warrior](https://university.alchemy.com/course/js/sc/5dad0494a54be5305b6b3297/stage/5dad0fc0a54be5305b6b329f)

##  Subclasses

It is possible to create subclasses that **extend** or inherit behavior from their parent class.

>   📖 Underneath the hood, **extend** uses the prototype chain. Refer to the prototype lesson to understand the difference between prototypal inheritance and classical inheritance.

Let's see an example of extending a class:

```
class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    
}
```

In `Rectangle`, we can add functionality that only pertains to a rectangle without changing our definition of `Shape`.

Meanwhile `Rectangle` inherits the position property from `Shape`:

```
const rect = new Rectangle();

console.log(rect.position.x); // 0
console.log(rect.position.y); // 0
```

##  🏁 Your Goal: Extend Hero

In the **new file**, `Warrior.js`, modify the `Warrior` to extend the `Hero` class.

>   No need to add anything to Warrior just yet, simply extend the class for now!

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