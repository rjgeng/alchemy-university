const Celebrity = require('./Celebrity');

describe('Celebrity', () => {
    describe('Will Smith', () => {
        const celebrity = new Celebrity("Will Smith");

        it('[1] should set their name', () => {
            expect(celebrity.name).toBe("Will Smith");
        });

        it('[2] should set their age', () => {
            expect(celebrity.age).toBe(51);
        });
    });

    describe('Matt Damon', () => {
        const celebrity = new Celebrity("Matt Damon");

        it('[3] should set their name', () => {
            expect(celebrity.name).toBe("Matt Damon");
        });

        it('[4] should set their age', () => {
            expect(celebrity.age).toBe(49);
        });
    });
});