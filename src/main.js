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

export { capitalize, reverseString };
