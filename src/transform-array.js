const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Argument is not Array');
  
  let result = [];
  const controls = ['--double-next', '--double-prev', '--discard-next', '--discard-prev'];

  return arr.reduce((acc, cur, i) => {

    if (controls.includes(cur)) return acc;
    
    if (arr[i - 1] === '--discard-next') {
      return acc;
    }
    
    if (arr[i - 1] === '--double-next') {
      acc.push(cur, cur);
    } else {
      acc.push(cur);
    }
    
    if (arr[i + 1] === '--double-prev') {  
      acc.push(cur);
    }
    
    if (arr[i + 1] === '--discard-prev') {
      return acc.slice(0, -1);
    }   
    return acc;
  }, []);
};
