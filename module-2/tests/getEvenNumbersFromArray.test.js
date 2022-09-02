const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const NumbersValidator = require('../app/numbers-validator');

describe('getEvenNumbersFromArray', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  it('should return an array of even numbers when provided with proper data', function () {
    const arrayOfRandomNumbers = [2, 7, 12, 17, 1, 55, 32, 10];
    expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers)).to.be.eql([2, 12, 32, 10]);
  });

  it('should throw an error when one or more elements of the array is not a number', function () {
    const randomArray = [2, 7, null, 12, 20, 11];
    expect(() => validator.getEvenNumbersFromArray(randomArray)).to.throw(`2,7,,12,20,11] is not an array of "Numbers"`);
  });
});
