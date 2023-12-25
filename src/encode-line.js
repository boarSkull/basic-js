const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = Array.from(str);
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    let idx = i;
    while (arr[idx] === arr[idx + 1]) {
      idx++;
      count++;
    }
    arr.splice(i, count, `${count > 1 ? count : ''}${arr[i]}`);
  }
  return arr.join('');
}

module.exports = {
  encodeLine,
};
