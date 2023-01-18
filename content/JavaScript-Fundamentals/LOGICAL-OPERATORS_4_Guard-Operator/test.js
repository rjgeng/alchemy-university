const friendName = require('./friendName');

describe('friendName', () => {
    describe('when friend is defined', () => {
        it('[1] should get the name', () => {
            expect(friendName({ name: 'Bob' })).toBe('Bob');
            expect(friendName({ name: 'Jim' })).toBe('Jim');
        });
    });
    describe('when friend is undefined', () => {
        it('[2] should return undefined', () => {
            expect(friendName()).toBe(undefined);
        });
    });
});
