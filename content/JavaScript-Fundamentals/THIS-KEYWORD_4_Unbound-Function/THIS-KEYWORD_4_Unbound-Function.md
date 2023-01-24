# THIS KEYWORD 4: Unbound Function

-   [THIS KEYWORD 4: Unbound Function](https://university.alchemy.com/course/js/sc/5db228dca54be5305b6b32c6/stage/5db33941a54be5305b6b32dd)

##  Unbound Function

In JavaScript, it is often helpful to define functions inside of other functions. In these cases, keeping track of the bound context can be quite tricky!

>   📖 You'll see this behavior quite often in asynchronous programming. Asynchronous means the code may run at a future point in time, depending on things like animations, network calls or user interaction. We'll look at this closer in **Callback Functions**.

Let's take a look at an example:

```
const YEAR = (1000 * 60 * 60 * 24 * 365);

function addYear() {
    setTimeout(function() {
        this.age++;
    }, YEAR);
}

const person = { name: 'Fred', age: 29 }

addYear.call(person);
```

This function should run after one year, incrementing Fred's age. However, when the function *finally* does run, `this` will not be set to the person. The function passed to `setTimeout` is not bound to the same `this` and defaults to the global `this`.

If we want to fix it, there are several ways:

1.  Closure
1.  Bind the Function
1.  Arrow Syntax

>   👁️ Be sure to check out arrow syntax! It results in a very clean solution to this problem. 🏆

##  🏁 Your Goal: Fix the Context

Within the function `Celebrity`, a method is used to fetch the celebrity's age. The second argument to `fetchAge` is a callback function. The callback function will receive `age` as an argument.

>   ⚠️ Unfortunately, due to the function call-site, `this` will be re-defined to not refer to the celebrity. Running the tests without modifying the code will result in a `TypeError`.

Fix `this.age` to refer to the same `this` as the function `Celebrity`.

## CodeBase

-   [Celebrity.js](Celebrity.js)
-   [fetchAge.js](fetchAge.js)
-   [index.js](index.js)
-   [test.js](test.js)

## Run start and test

```
npm run test
```

```
npm run start
```

