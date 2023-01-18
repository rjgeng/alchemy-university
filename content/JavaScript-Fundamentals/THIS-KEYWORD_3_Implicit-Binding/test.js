const namedObject = require('./namedObject');

describe('getName', () => {
    it('[1] should return the name of the object', () => {
        expect(namedObject.getName()).toBe('Bob');
    });

    describe('if the name changes', () => {
        beforeEach(() => {
            namedObject.name = "Alice";
        });

        it('[2] should also change the name returned by getName', () => {
            expect(namedObject.getName()).toBe('Alice');
        });
    });
});