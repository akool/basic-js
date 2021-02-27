const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let month;  
  const seasons = [
    [11, 0, 1, 'winter'],
    [2, 3, 4, 'spring'],
    [5, 6, 7, 'summer'],
    [8, 9, 10, 'autumn'],
  ]

  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  try {
    month = date.getMonth();
    if (Object.keys(date).length) throw new Error();
  } catch (error) {
    throw error;
  }

  return seasons.find(arr => arr.indexOf(month)>=0).pop();
};
