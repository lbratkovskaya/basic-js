const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  if (!Array.isArray(matrix))
  {
     throw new CustomError('Not an array argument');
  }
  let counter = 0;
  matrix.forEach( array => {
    if (!Array.isArray(array))
    {
       throw new CustomError('Not a two-dimension array argument');
    }
      array.forEach ( elem => {
        if ('^^' === elem)
        {
          counter ++;
        }
      }
        );
    });

    return counter;
};
