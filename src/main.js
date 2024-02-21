// @ts-check

/**
 * @param {string} string
 * @returns {string}
 */
function capitalize(string) {
  if (!string) return "Input is not a string. Please input a string.";

  return string.charAt(0).toUpperCase();
}

export { capitalize };
