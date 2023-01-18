const startError = require('./startError');

describe('startError', () => {

    it.todo('[1] should throw a subclass of error');

    it('[1] should throw a subclass of error', () => {
        let ex;
        try {
            startError();
        }
        catch (_ex) {
            ex = _ex;
        }
        // assert(ex, "did not throw an error");
        // console.log(ex);
        expect(ex.__proto__.__proto__.constructor).toBe(Error);
    });
});