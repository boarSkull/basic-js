const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  console.log(date[Symbol.toStringTag]);
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  let month = date.toLocaleDateString('en-EN', { month: 'long' });
  const monthsToSeasons = {
    January: 'winter',
    February: 'winter',
    March: 'spring',
    April: 'spring',
    May: 'spring',
    June: 'summer',
    July: 'summer',
    August: 'summer',
    September: 'fall',
    October: 'fall',
    November: 'fall',
    December: 'winter',
  };
  return monthsToSeasons[month];
}

module.exports = {
  getSeason,
};
