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
    });
}); 