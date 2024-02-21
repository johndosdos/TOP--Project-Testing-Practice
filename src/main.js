// @ts-check

/**
 * @param {string} string
 * @returns {string}
 */
function capitalize(string) {
  if (!string) return "Input is not a string. Please input a string.";

  return string.charAt(0).toUpperCase();
}

/**
 * @param {string} string
 * @returns {string}
 */
function reverseString(string) {
  if (!string) return "Input is not a string. Please input a string.";

  return string.split("").reverse().join("");
}

/**
 * A calculator object that contains functions for the basic operations
 */
const calculator = {
  /**
   * Adds two numbers together
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  add: (x, y) => {
    return x + y;
  },

  /**
   * Subtracts two numbers from another
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  subtract: (x, y) => {
    return x - y;
  },

  /**
   * Multiplies two numbers together
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  multiply: (x, y) => {
    return x * y;
  },

  /**
   * Divides two numbers from another
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  divide: (x, y) => {
    return x / y;
  },
};

export { capitalize, reverseString, calculator };
