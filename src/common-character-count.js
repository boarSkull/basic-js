const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const obj = {};

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        if (obj[s1[i]]) {
          obj[s1[i]] += 1;
        } else {
          obj[s1[i]] = 1;
        }
        s2 = s2.replace(s2[j], ' ');
        s1 = s1.replace(s1[i], ' ');

        console.log(s1);
        console.log(s2);
        continue;
      }
    }
  }
  delete obj[' '];

  return Object.values(obj).length > 0
    ? Object.values(obj).reduce((accum, current) => accum + current)
    : 0;
}

module.exports = {
  getCommonCharacterCount,
};
