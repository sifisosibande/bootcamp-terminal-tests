var isWeekday = require('../isWeekday');

describe('testing my isWeekday function' , function(){
    it('it should find out if the parameter passed in is a day of the week or not' , function(){
        assert.equal(true, isWeekday('Monday'), "this is true");

        
    });
    it('it should return if the parameter passed in is not a day of the week' , function(){
        assert.equal(isWeekday('Saturday'), false);

        
    });

});