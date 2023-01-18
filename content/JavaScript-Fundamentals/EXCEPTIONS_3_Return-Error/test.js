const catchError = require('./catchError');

describe('catchError', () => {
    it.todo('[1] should catch a thrown error');
    it.todo('[2] should return the thrown error');

    // This code in Chai need modify to jest
    
    /* 
    it('should catch a thrown error', () => {
        let ex;
        try {
            catchError(() => {
                throw new Error();
            });
        }
        catch (_ex) {
            ex = _ex;
        }
        assert(!ex, "the error should have been caught");
    });
    */

    // This code in Chai need modify to jest
    
    /* 
    it('[2] should return the thrown error', () => {
        let expected = new Error();
        let actual = catchError(() => {
            throw expected;
        });
        expect(actual, expected).toBe("Should have returned the same error that was caught");
    }); 
    */

    it('[3] should return false when no error is thrown', () => {
        let ex = catchError(() => {});
        expect(ex).toBe(false);
    });
});


