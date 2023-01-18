# CLASSES 5: Building Rage

-   [CLASSES 5: Building Rage](https://university.alchemy.com/course/js/sc/5dad0494a54be5305b6b3297/stage/5dad128aa54be5305b6b32a8)

##  Calling Super Methods

In the last stage, we used `super` to invoke a constructor from a **child** class constructor.

>   📖 Often inheritance uses parent/child metaphors. The class that has been extended is called the **parent**, while the class extending it is called the **child** 👶

We can also use `super` to call corresponding methods on a **parent** class:

```
class Potion {
    constructor() {
        this.empty = false;
    }

    drink() {
        this.empty = true;
    }
}

class NoisyPotion extends Potion {
    drink() {
        super.drink();
        console.log("LOUD NOISES!");
    }
}
```

The `NoisyPotion` will log loud noises when it is drunk.

By calling `super.drink()` it will also set itself to `empty`, which is the `drink` behavior for `Potion`.

## 🏁 Your Goal: Extend takeDamage

Add a method `takeDamage` to the `Warrior` class that will increment rage by 1 each time the warrior takes damage.

It should also invoke `takeDamage` method on `Hero` which will inflict the damage on the hero's health.

```
const warrior = new Warrior();

console.log(warrior.health, warrior.rage); // 50, 0

warrior.takeDamage(10);

console.log(warrior.health, warrior.rage); // 40, 1
```

> Be sure to pass the damage argument into the `super.takeDamage` call!

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