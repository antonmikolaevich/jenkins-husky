const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const IntegerNumber = require('../app/numbers-validator');

describe('isInteger', function () {
    let validator;

    beforeEach(function () {
      validator = new IntegerNumber();
    });

    afterEach(function () {
        validator = null;
      });

   
     
      it('should return error for not number',()=>{
        const isNotInteger = 'A'
        expect(()=>{
            (validator.isInteger(isNotInteger))
        }).to.throw('[A] is not a number')
      })

      it('should return integer',()=>{
        const n = 10;
        expect((validator.isInteger(n))).to.be.equal(true)
      })
 


});
