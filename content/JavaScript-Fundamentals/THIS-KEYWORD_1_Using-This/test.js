const thisName = require('./thisName');

describe('thisName', () => {
    it.todo('[1] should throw an error when called directly');

    /* 
    it('should throw an error when called directly', () => {
        let error;
        try { 
            this.name();
        }
        catch(ex) {
            error = ex;
        }
        assert(error, "When called directly, this should not be defined");
    });
    */
    
    it('[2] should return a name when it is called bound to an object', () => {
        expect(thisName.call({ name: 'Bob' })).toBe('Bob');
    });
});