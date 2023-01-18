function catchError(fn) {
    try {
        fn();
    } 
    catch (ex) {
        console.log(ex);
    }
    
}

module.exports = catchError;