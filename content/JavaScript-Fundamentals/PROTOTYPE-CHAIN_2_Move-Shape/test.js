const Shape = require('./Shape');

let shape;
let x = 5;
let y = 10;
let moveX = 20;
let moveY = 30;
describe('Shape Instance', () => {
    beforeEach(() => {
        shape = new Shape(x, y);
    });

    it('[1] should set the initial position coordinates', () => {
        expect(shape.position.x).toBe(x);
        expect(shape.position.y).toBe(y);
    });

    it('[2] should have a function called move', () => {
        expect(typeof shape.move).toBe( "function");
    });

    it('[3] should handle a move', () => {
        shape.move(moveX, moveY);
        expect(shape.position.x).toBe(x + moveX);
        expect(shape.position.y).toBe(y + moveY);
    });
});