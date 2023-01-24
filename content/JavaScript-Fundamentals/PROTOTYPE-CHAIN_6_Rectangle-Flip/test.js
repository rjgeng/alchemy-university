const Rectangle = require('./Rectangle');
const Shape = require('./Shape');

describe('Rectangle', () => {
    let rectangle;
    let x = 10;
    let y = 15;
    let height = 15;
    let width = 20;
    describe('instance', () => {
        beforeEach(() => {
            rectangle = new Rectangle(x, y, height, width);
        });

        it('[1] should set the properties', () => {
            expect(rectangle.position.x).toBe(x);
            expect(rectangle.position.y).toBe(y);
            expect(rectangle.height).toBe(height);
            expect(rectangle.width).toBe(width);
        });

        it('[2] should have move and flip functions', () => {
            expect(typeof rectangle.move).toBe("function");
            expect(typeof rectangle.flip).toBe("function");
        });

        it.todo('[3] should refer to the Shape prototype in the prototype chain');

        /*
        it('[3] should refer to the Shape prototype in the prototype chain', () => {
            assert(Shape.prototype.isPrototypeOf(rectangle));
        });
        */

        it('[4] should flip height and width', () => {
            rectangle.flip();
            expect(rectangle.height).toBe(width);
            expect(rectangle.width).toBe(height);
        });
    });
}); 