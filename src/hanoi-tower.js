const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  return {
    turns: Math.pow(2, disksNumber) - 1,
    seconds: Math.floor(60 * 60 / turnsSpeed * turns),
  };
};
