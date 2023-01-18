// Our Shape "Constructor"
function Shape(x, y) {
    this.position = { x, y }
}

/*
function Shape(x, y) {
    this.x = x;
    this.y = y
    this.position = {
        x: this.x,
        y: this.y
    }
}
*/


module.exports = Shape;