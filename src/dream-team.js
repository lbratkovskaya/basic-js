const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members))
  {
    return false;
  }
  let lettersArray = [];
  members.forEach( member => 
    {
      if ( typeof member === 'string' && member !== '')
      {
        member = member.trim();
        let firstLetter = member.substring(0,1).toUpperCase();

        if (lettersArray.length == 0)
        {
          lettersArray.push(firstLetter);
        }
        else if (lettersArray.indexOf(firstLetter) > -1)
        {
          lettersArray.splice(lettersArray.indexOf(firstLetter), 0, firstLetter);
        }
        else {
          let index = 0;
          let letter= lettersArray[0];
          while ( letter < firstLetter)
          {
            letter = lettersArray[++index];
          }

          if (index == lettersArray.length)
          {
            lettersArray.push(firstLetter);
          }
          else
          {
            lettersArray.splice(index, 0, firstLetter);
          }
        }
      }
    });

    return lettersArray.join('');
};
