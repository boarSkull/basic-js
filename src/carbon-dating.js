const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *Math.log2(15 / 8) / k;
 */
function dateSample(sampleActivity) {
  let parsedValue = parseFloat(sampleActivity);
  if (arguments.length === 0) {
    return false;
  }
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  if (Number.isNaN(parsedValue)) {
    return false;
  }
  if (parsedValue > 15 || parsedValue <= 0) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / parsedValue) / k);
}

module.exports = {
  dateSample,
};
