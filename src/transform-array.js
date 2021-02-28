const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Argument is not Array');
  
  let result = [];
  const controls = ['--double-next', '--double-prev', '--discard-next', '--discard-prev'];

  arr.forEach((item, i) => {
    if (controls.includes(item)) return;
    
    if (arr[i - 1] === '--double-next') {
      result.push(item, item);
      return;
    } else {
      result.push(item);
    }
    
    if (arr[i + 1] === '--double-prev') {
      result.push(item);
      return;
    }
    
    if (arr[i - 1] === '--discard-next') {
      result.push(item);
      return;
    }
    
    if (arr[i + 1] === '--discard-prev') {
      result.pop();
      return;
    }    
    
  });

  return result;
};
