const ORDER_TYPES = require('./orderTypes.js');

function numberOfPizzas(orders) {
    // let total = 0;
    // for (let i = 0; i < orders.length; i++){
    //     if (orders[i].type == 0){
    //         total += orders[i].pizzas;
    //     }            
    // }
    // return total;
    return orders.reduce((sum, el) => {
        (el.type == 0) ? sum += el.pizzas : sum;
        return sum;
    }, 0)
}

module.exports = numberOfPizzas;