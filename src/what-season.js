const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {

  if ( !date ) {
    return 'Unable to determine the time of year!'
  }

  if (typeof date.getMilliseconds() === 'function')
  {
    throw new Error('Not a date actually!');
  }

  let getClassOf = Function.prototype.call.bind(Object.prototype.toString)

  if (!getClassOf(date).includes('Date'))
  {
    throw new Error('You almost caught me!');
  }

  switch (Math.floor( (date.getMonth() + 1) / 3))
  {
    case 0:
    case 4: return 'winter';
    case 1: return 'spring';
    case 2: return 'summer';
    case 3: return 'autumn';
    default: return 'Not a valid date';
  }
};
