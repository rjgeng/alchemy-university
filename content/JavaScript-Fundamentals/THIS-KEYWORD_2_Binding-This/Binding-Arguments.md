# Binding Arguments

You can bind arguments to a function to create partially applied functions. Take a look!

```
function add(x, y) {
    return x + y;
}
```

Not a very exciting function on it's own, we can bind an argument to `add` to create a new type of function:

```
const addTwo = add.bind(null, 2);

console.log( addTwo(2) ); // 4
console.log( addTwo(10) ); // 12
```

Pretty neat, huh? Very functional! 🤓