const Shape = require('./Shape');

describe('Shape', () => {
    it('should be a function', () => {
        expect(typeof Shape).toBe('function');
    });

    let shape;
    let x = 10;
    let y = 15;
    describe('instance', () => {
        beforeEach(() => {
            shape = new Shape(x, y);
        });
        
        it.todo('[[1] should have a position property associated to an object');

        it('[1] should have a position property associated to an object', () => {
            //assert(shape.position, "could not find property position on the shape instance");
            expect(typeof shape.position).toBe("object");
        });

        it('[2] should set the position coordinates', () => {
            expect(shape.position.x).toBe(x);
            expect(shape.position.y).toBe(y);
        });
    });
}); 