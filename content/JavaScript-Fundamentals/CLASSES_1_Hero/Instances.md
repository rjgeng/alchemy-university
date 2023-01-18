#   Instances

Classes form the template for new objects to borrow behavior from. These new objects are called **instances**.

An important note in JavaScript is that these instances all refer to the **same** method created on the class:

<p align="center"><img src="../../imgs/Frame_1_31_sbhavg .png" width="40%" >  </p>

This image represents the code:

```
class Team {
    constructor(name) {
        this.name = name;
    }
}

const team1 = new Team("Giants");
const team2 = new Team("Jets");
```

Both `team1` and `team2` are instances of `Team`. They both use the **same** constructor function.

The difference is that when `team1` calls the `constructor`, the `this` keyword is the `team1` object. For `team2`, this would be the `team2` object.

The result of the code above is `name` is stored on the appropriate object:

```
const team1 = new Team("Giants");
const team2 = new Team("Jets");

console.log(team1.name); // "Giants"
console.log(team2.name); // "Jets"
```