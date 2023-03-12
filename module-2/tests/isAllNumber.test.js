const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const ArrayNumbers = require('../app/numbers-validator');

describe('isAllNumber', function () {
  let validator;

  beforeEach(function () {
    validator = new ArrayNumbers();
  });

  afterEach(function () {
    validator = null;
  });

  it('should return a array', () => {
    const arrayValue = [9, 5, 6];
    expect(validator.isAllNumbers(arrayValue));
  });

  it('should return error for not array', () => {
    const arrayValue = 9;
    expect(() => {
      validator.isAllNumbers(arrayValue);
    }).to.throws('[9] is not an array');
  });
});
