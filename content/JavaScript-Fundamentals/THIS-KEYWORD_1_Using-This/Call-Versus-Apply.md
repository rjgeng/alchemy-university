# Call Versus Apply

Call and Apply are very similar methods. They both exist on every JavaScript function and they both allow you to set the **context** `this`.

The difference comes when you want to pass arguments to the function:

```
function totalThings(a, b, c) {
    return `There are ${a + b + c} ${this}`;
}
```

Let's say we wanted this string to be: "There are 15 Students". There are two ways we could go about it. We could use `call`:

```
totalThings.call("Students", 10, 3, 2);
```

Or we can use `apply`:

```
totalThings.apply("Students", [10, 3, 2]);
```

In both cases, `this` is set to "Students" and the arguments `a`, `b` and `c` are the values `10`, `3` and `2` respectively.

The difference is that `call` takes a list of arguments, while `apply` takes a single array of arguments.