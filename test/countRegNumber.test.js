var countRegNumber = require('../countRegNumber');

describe('testing my countRegNumber function' , function(){
    it('it should returns the number of registration numbers in the string' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

        
    });

});