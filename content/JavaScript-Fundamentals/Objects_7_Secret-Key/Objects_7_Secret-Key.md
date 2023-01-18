# Objects 7: Secret-Key

-   [Objects 7: Secret-Key](https://university.alchemy.com/course/js/sc/5d955d0e09d5ed335cbf098b/stage/5e3ceaaeac69d729dded0241)

##  Edit Object Values

Sometimes it's necessary to edit the values in an object!

We can edit the value directly, similar to the syntax for retrieving values:

```
const person = {
    name: "James",
    age: 22
}

person.name = "Sally";
person["age"] = 30;

console.log( person.name ); // Sally
console.log( person.age ); // 30
```

☝️ Just like retrieval we can use the `.` or `[]` notation. We can also **remove** keys completely:

```
const person = { 
    name: "Bob"
}

delete person.name;

console.log( person.name ); // undefined
```
He lost his own name. How sad 😭

**🏁 Your Goal: Remove the Secret Key**

The object passed into `removeSecret` has a `secret` key that must be removed!

Set the value of this key to `undefined` to pass the test cases. Modify the object directly, there is no need to return it.

>   Both updating the value and using delete will change the object everywhere it is referenced.

## CodeBase

-   [removeSecret.js](removeSecret.js)
-   [index.js](index.js)
-   [test.js](test.js)

## Run start and test

```
npm run test
```

```
npm run start
```
