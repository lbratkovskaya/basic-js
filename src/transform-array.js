const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('Not an array');
  }

  let resArray = [];
  let element;
  let instructions = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let markersArray = [];

  for (i = 0; i < arr.length; i++) {
    element = arr[i];

    switch (element) {
      case '--discard-next':
        if (resArray.length < arr.length - 1) {
          markersArray[i + 1] = false;
          markersArray[i] = false;
        }
        break;
      case '--discard-prev':
        if (resArray.length > 0 && markersArray[i - 1]) {
          resArray.pop();
          markersArray[i] = false;
        }
        break;
      case '--double-next':
        if (i < arr.length - 1 && !instructions.includes(arr[i + 1])) {
          resArray.push(arr[i + 1]);
          markersArray[i] = false;
        }
        break;
      case '--double-prev':
        if (resArray.length > 0 && markersArray[i - 1]) {
          resArray.push(arr[i - 1]);
          markersArray[i] = false;
        }
        break;
      default:
        if (markersArray[i] === undefined || markersArray[i] === true) {
          resArray.push(element);
          markersArray[i] = true;
        }
        break;
    }
  }

  return resArray;

};
