class NumbersValidator {
  /**
   * @param {Number} number number to check
   * @return {Boolean} true if element is even
   */
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
      throw new Error(`[${number}] is not of type "Number" it is of type "${typeOfVariable}"`);
    } else {
      return number % 2 === 0;
    }
  }

  /**
   * @param {Array<Number>} arrayOfNumbers array of numbers to go through
   * @return {Array<Number>} array of even numbers
   */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) && arrayOfNumbers.every(item => typeof item === 'number')) {
      return arrayOfNumbers.filter(this.isNumberEven);
    }
    throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
  }
}

module.exports = NumbersValidator;
