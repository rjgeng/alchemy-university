#   Object References

It's an important distinction in JavaScript that objects are passed by reference!

Let's create a function that modifies an object:

```
function modify(object) {
    object.message = "Hello World";
}
```

☝️ Let's create an object and pass it to this function:

```
const store = {
    name: "Seven Eleven" 
}

modify(store);

console.log(store.message); // Hello World
```

Look at that! The store's message has been updated. 🧐

Inside the `modify` function the `object` argument is referencing the same memory as the store. This is what it means to **pass by reference**.

When the `modify` function updates the `object`, it is updated everywhere else it is referenced.

>  ✅ It is always a good idea to be careful about modifying objects directly! Modifying a reference like this is referred to as a side-effect in functional programming. The function is modifying something outside of its **scope**, potentially leading to unexpected consequences! ⚠️