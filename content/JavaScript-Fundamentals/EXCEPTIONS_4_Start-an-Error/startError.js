function startError() {
    try {
        new Array(Infinity);
    }
    catch (e) {
        if (e instanceof RangeError) {
            throw new RangeError("The argument must be between -500 and 500.");
        }
    }    
}

module.exports = startError;