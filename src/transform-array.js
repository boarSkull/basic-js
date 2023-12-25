const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let stack = [];
  const operations = {
    '--double-next': (i) => {
      if (i < arr.length - 1) {
        stack.push(arr[i + 1]);
      }
    },
    '--double-prev': (i) => {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        stack.push(arr[i-1]);
      }
    },
    '--discard-next': (i) => {
      if (i < arr.length - 1) {
        i++;
      }
    },
    '--discard-prev': (i) => {
      if (stack.length > 0 && arr[i - 2] !== '--discard-next') {
        stack.pop();
      }
    },
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
    } else if (operations.hasOwnProperty(arr[i])) {
      operations[arr[i]](i);
    } else {
      stack.push(arr[i]);
    }
  }
  return stack;
}

module.exports = {
  transform,
};
