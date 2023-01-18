#   THIS KEYWORD 1: Using This

-   [THIS KEYWORD 1: Using This](https://university.alchemy.com/course/js/sc/5db228dca54be5305b6b32c6/stage/5db228fba54be5305b6b32c7)

##  This Keyword

In JavaScript, you can always access the keyword `this`. It is a way of defining the **context** of a function.

In global scope (not inside of a function), `this` refers to the module itself within Node.js or the `window` within the browser.

When it comes to functions, `this` can be set in a few different ways. Let's focus first on how we can explicitly set it.

```
function sum() {
    return this.a + this.b;
}
```

If we were to run `sum()` directly, `this` would be set from the global scope and likely neither `a` nor `b` would be defined.

We could instead, `call` the function with a specific **context**:

```
const result = sum.call({ a: 2, b: 4 });

console.log(result); // 6 
```

The method `call` is available on all JavaScript functions. The first argument we pass to `call` becomes `this` inside the function.

>   🔍 Another method that manipulates a function's context is `apply`. To see the difference between these two methods, check out [details](Call-Versus-Apply.md).

##  🏁 Your Goal: Get Name

Create a function which retrieves the property `name` on `this`.

You can expect the property to exist. Example:

```
const name = thisName.call({ name: 'Ted' }); 

console.log(name); // Ted
```

## CodeBase

-   [thisName.js](thisName.js)
-   [index.js](index.js)
-   [test.js](test.js)

## Run start and test

```
npm run test
```

```
npm run start
```