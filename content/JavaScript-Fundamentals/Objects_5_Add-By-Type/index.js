const numberOfPizzas = require('./numberOfPizzas');
const ORDER_TYPES = require('./orderTypes');

let orders = [
    { pizzas: 3, type: ORDER_TYPES.PIZZA, extraCheese: true },
    { pizzas: 5, type: ORDER_TYPES.PIZZA, extraCheese: false },
    { pizzas: 10, type: ORDER_TYPES.PIZZA, extraCheese: true },
]

console.log(numberOfPizzas(orders)) // 18

orders = [{ pizzas: 3, type: ORDER_TYPES.PIZZA }]

console.log(numberOfPizzas(orders)) // 3