# EXCEPTIONS 4: Start an Error

-   [EXCEPTIONS 4: Start an Error](Error-Types.md)

##  JavaScript Errors

There are many errors that can be thrown by the JavaScript language itself.

Here's an example of an error thrown by JavaScript:

```
const x = 3;

x();
```

In this example, `x` is a number and cannot be invoked! This will throw a `TypeError`.

>  🔍 There are several different types of errors thrown by JavaScript: `TypeError`, `ReferenceError`, `SyntaxError`, and `RangeError`. You can learn about these different types of errors and the situations in which they occur in [details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).

#   🏁 Your Goal: Start an Error

Pick an error from one of the situations mentioned in details. Write code that will make one of these errors occur.

As long as any of the error types mentioned above are thrown, the test cases will pass.

## CodeBase

-   [startError.js](startError.js)
-   [index.js](index.js)
-   [test.js](test.js)

## Run start and test

```
npm run test
```

```
npm run start
```

## issues

-   [test.js](test.js)
