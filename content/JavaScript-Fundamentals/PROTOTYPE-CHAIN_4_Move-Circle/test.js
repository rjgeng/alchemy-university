const Circle = require('./Circle');

describe('Circle', () => {
    let circle;
    let x = 10;
    let y = 15;
    let radius = 15;
    describe('instance', () => {
        beforeEach(() => {
            circle = new Circle(x, y, radius);
        });

        it('[1] should set the properties', () => {
            expect(circle.position.x).toBe(x);
            expect(circle.position.y).toBe(y);
            expect(circle.radius).toBe(radius);
        });

        it('[2] should have a move function', () => {
            expect(typeof circle.move).toBe("function");
        });

        it('[3] should have move the shape', () => {
            circle.move(2, 1);
            expect(circle.position.x).toBe(x + 2);
            expect(circle.position.y).toBe(y + 1);
        });

        it.todo('[4] should refer to the Shape prototype in the prototype chain');

        // it('[4] should refer to the Shape prototype in the prototype chain', () => {
        //     assert(Shape.prototype.isPrototypeOf(circle));
        // });
    });
}); 