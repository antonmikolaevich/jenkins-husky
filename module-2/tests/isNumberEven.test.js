const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const NumbersValidator = require('../app/numbers-validator');

describe('isNumberEven', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should return true if number is even', function () {
    expect(validator.isNumberEven(10)).to.be.equal(true);
  });

  it('should throw an error when provided a string',()=>{
    expect(()=>{
      validator.isNumberEven('4');

    }).to.throw('[4] is not of type "Number" it is of type "string"')
    
  });




});
