import assert from 'assert';
import fromWhere from '../fromWhere.js';

describe('testing my fromWhere function' , function(){
    it('it should take a car registration number as a parameter and returns the town the car is from.' , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');



        
    });

});