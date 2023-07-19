var yearsAgo = require('../yearsAgo');

describe('testing my yearsAgo function' , function(){
    it('it should takes in a year and return how many years ago that year is from the current year.' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));

        
    });

});