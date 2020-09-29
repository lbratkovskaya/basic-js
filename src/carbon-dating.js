const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (!(typeof sampleActivity === 'string'))
  {
    return false;
  }
  let sampleActivityNumber = +sampleActivity;
  if (!sampleActivityNumber || sampleActivityNumber<=0 || sampleActivityNumber > MODERN_ACTIVITY)
  {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivityNumber) / Math.log(2) * HALF_LIFE_PERIOD);
};
