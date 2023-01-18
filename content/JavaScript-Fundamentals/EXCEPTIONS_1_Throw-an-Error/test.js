const throwError = require('./throwError');

describe('throwError', () => {

    it.todo('[1] should throw an error');

    it('[1] should throw an error', () => {
        let ex;
        try { 
            throwError();
        }
        catch(_ex) {
            ex = _ex;
        }
        // assert(ex, "did not throw an error"); // issue: whats is counterpart code in Jest to Chai
        expect(ex.constructor).toBe(Error);
    });
});