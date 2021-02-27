const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const sep = options.separator || '+';
  const addSep = options.additionSeparator || '|';
  let subStr = '';

  if (options.hasOwnProperty('addition')) {
    subStr = Array(options.additionRepeatTimes || 1).fill(String(options.addition)).join(addSep);
  } 

  return Array(options.repeatTimes).fill(String(str) + subStr).join(sep);
};