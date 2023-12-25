const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(String(n)).map((el) => +el);
  let initialArr = arr;
  let max = 0;
  for (let i = 0; i < initialArr.length; i++) {
    arr = [...arr.slice(0, i), ...arr.slice(i + 1, undefined)];
    if (+arr.join('') > max) {
      max = +arr.join('');
    }
    arr = initialArr;
  }
  return max;
}

module.exports = {
  deleteDigit,
};
