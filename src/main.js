// @ts-check

/**
 * A function that takes a string and returns it with the first character capitalized.
 * @param {string} string
 * @returns {string}
 */
function capitalize(string) {
  if (!string) return "Input is not a string. Please input a string.";

  return string.charAt(0).toUpperCase();
}

/**
 * A function that takes a string and returns it reversed.
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

/**
 * A function that takes a string and a shift factor and returns with each character shifted
 * @param {string} string
 * @param {number} shiftFactor
 * @returns {string}
 */
function caesarCipher(string, shiftFactor = 0) {
  if (shiftFactor < 0) {
    return "Shift factor should be greater than or equal to 0";
  }

  const shiftedString = string
    .split("")
    .map((element) => {
      /* For lowercase characters */
      if (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122) {
        return String.fromCharCode(
          ((element.charCodeAt(0) - 97 + shiftFactor) % 26) + 97,
        );
      }

      /* For UPPERCASE characters */
      if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) {
        return String.fromCharCode(
          ((element.charCodeAt(0) - 65 + shiftFactor) % 26) + 65,
        );
      }

      /* For non-letter characters */
      return element;
    })
    .join("");

  return shiftedString;
}

export { capitalize, reverseString, calculator, caesarCipher };
