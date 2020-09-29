const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth = 0;

  calculateDepth(arr, currLevel = 0) {
    
    let res;

    if ( Array.isArray(arr) ) {
      
      ++currLevel;

      this.depth = Math.max(this.depth, currLevel);

      arr.forEach(element => {
         this.calculateDepth(element, currLevel);
      });

      res = this.depth;

      if (currLevel == 1)
      {
        this.depth = 0;
      }

    }

    return res;
  }
};