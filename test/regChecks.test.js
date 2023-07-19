var regCheck = require('../regCheck');

describe('testing my regCheck function' , function(){
    it('it should return true for registration numbers end matches the location' , function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'), "this is true");

        
    });
    it('it should return false for registration numbers end that do not matches the location' , function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'), "this is true");

        
    });

});