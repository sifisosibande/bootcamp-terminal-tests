var isFromBellville = require('../isFromBellville');

describe('testing my isFromBellville function ' , function(){
    it('it should returns true if a registration number is for Bellville' , function(){
        assert.equal(true, isFromBellville("CY 123", "this should be true"));

        
    });
    it('it should returns false if a registration number is not for Bellville' , function(){
        assert.equal(false, isFromBellville("CJ 123", "this should be true"));

        
    });


});