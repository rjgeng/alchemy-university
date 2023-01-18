# Calling Super

A common mistake when using `super` is to call it after accessing `this`:

```
class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    constructor() {
        this.height = 10;
        this.width = 5;
        super(); // <-- this should be moved two lines up!
    }
}
```

This code will not give us any issues until we try to create a new rectangle:

```
const rect = new Rectangle();
```

Then it will blow up with an exception: `Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor` 😱