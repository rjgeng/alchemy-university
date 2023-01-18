#   Error Types

-   [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Let's explore several different types of JavaScript run-time errors.

##  Type Error

Commonly thrown when the variable is not the expected type for the operation. Here's a couple examples:

```
const x = 3;

x();
```

☝️ Throws `TypeError: x is not a function`.

```
let b;

b.prop;
```

☝️ Throws `TypeError: Cannot read property 'prop' of undefined`

## Reference Error

Thrown in cases where the variable is not defined. More technically, the reference cannot be found:

```
z();
```

☝️ Throws `ReferenceError: z is not defined`.

##  Syntax Error

Thrown in cases where the code is not valid JavaScript:

```
const a = 3;

a.72;
```

☝️ Throws `SyntaxError: Unexpected number`.

>   📖 If you use a [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) like Babel JS this code may not pass the compilation step due to invalid syntax.

##  Range Error

Thrown when a value is passed to a function where the value is not within the intended range of accepted values. For example, an array initializer:

```
new Array(Infinity)
```

☝️ Throws `RangeError: Invalid array length`.