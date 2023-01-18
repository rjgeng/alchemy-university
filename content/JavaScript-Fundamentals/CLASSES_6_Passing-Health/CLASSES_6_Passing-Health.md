# CLASSES 6: Passing Health

-   [CLASSES 6: Passing Health](https://university.alchemy.com/course/js/sc/5dad0494a54be5305b6b3297/stage/5dad164fa54be5305b6b32ac)

##  🏁 Configurable Health

Final Task! Let's make both the `Hero` and `Warrior `classes have configurable health.

When creating a warrior/hero, we'll pass a number which should be stored as their health:

```
const warrior1 = new Warrior(50);
const warrior2 = new Warrior(25);
const hero1 = new Hero(10);

console.log(warrior1.health); // 50
console.log(warrior2.health); // 25
console.log(hero1.health); // 10
```

Arguments that are passed when calling a class with `new` will be passed directly to the constructor.

> You'll need to change the `constructor` of both the `Hero` and `Warrior` for this one!

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