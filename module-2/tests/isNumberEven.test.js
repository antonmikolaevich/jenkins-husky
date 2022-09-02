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
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('should return false if number is odd', function () {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });

  it('should throw an error when provided with undefined', function () {
    expect(() => validator.isNumberEven(undefined)).to.throw('[undefined] is not of type "Number" it is of type "undefined"');
  });

  it('should throw an error when provided with null', function () {
    expect(() => validator.isNumberEven(null)).to.throw('[null] is not of type "Number" it is of type "object"');
  });

  it('should throw an error when provided with boolean', function () {
    expect(() => validator.isNumberEven(false)).to.throw('[false] is not of type "Number" it is of type "boolean"');
  });

  it('should throw an error when provided with a string', function () {
    expect(() => validator.isNumberEven('2')).to.throw('[2] is not of type "Number" it is of type "string"');
  });

  it('should throw an errow when provided with an array', function () {
    expect(() => validator.isNumberEven([2, 4])).to.throw('[2,4] is not of type "Number" it is of type "object"');
  });

  it('should throw an errow when provided with an object', function () {
    expect(() => validator.isNumberEven({ 1: 1 })).to.throw('[[object Object]] is not of type "Number" it is of type "object"');
  });
});
