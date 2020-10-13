/**
 * Creates an array of numbers from 0 to a spcified number.
 * Why is this not a thing in JS?
 *
 * @param {number} n The upper limit of the range.
 * @return {array} A range of numbers.
 */
const range = n => [...Array(n).keys()];

/**
 * Splits an array into multiple arrays of a given length.
 *
 * @param {array} arr   Input array to be split.
 * @param {number} len  The length of each "segment".
 * @return {array}      An array of arrays.
 */
const chunk = (arr, len) => {
  return range(Math.ceil(arr.length / len))
    .map((_, i) => arr.slice(i * len, i * len + len));
};

/**
 * Given some text, split it up into an array of lines.
 *
 * @param {string} text The text to be split into lines.
 * @param {number} len  OPTIONAL: the number of words for each line.
 * @return {array}      An array of lines.
 */
export const splitText = (text, len = 5) => {
  return chunk(text.split(' '), len)
    .map(line => line.join(' '));
};
