const thisName = require('./thisName');

describe('thisName', () => {
    it('[1] should be bound to an object with the name Bob', () => {
        expect(thisName()).toBe('Bob');
    });

    it('[2] should have renamed the function bound thisName', () => {
        expect(thisName.name).toBe("bound thisName");
    });
});