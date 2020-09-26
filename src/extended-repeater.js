const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options, defaultSeparator) {
  str = '' + str;

  if (!defaultSeparator) {
    defaultSeparator = '+';
  }

  let result = '';
  let additionalStr = options['additionRepeatTimes']
    ? repeater(options['addition'], { repeatTimes: options['additionRepeatTimes'], separator: options['additionSeparator'] }, '|')
    : options['addition'] || '';

  if (!options['repeatTimes']) {
    return str + additionalStr;
  }

  for (i = 0; i < options['repeatTimes']; i++) {

    result += str + additionalStr
      + (i < options['repeatTimes'] - 1 ? (options['separator'] ? options['separator'] : defaultSeparator) : '');
  }

  return result;
};
