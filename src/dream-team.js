const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  return members
    .filter(m => typeof m == 'string')
    .map(m => {
      m = m.toString().trim();
      return m[0].toUpperCase();
    })
    .sort()
    .join('');
};
