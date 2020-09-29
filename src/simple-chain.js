const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if ( value === undefined ) {
      this.chain.push('(  )');
    }
    else {
      this.chain.push('( ' + value + ' )');
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.chain.length)
    {
      this.chain = [];
      throw new Error('Invalid position');
    }
    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = Array.from(this.chain).join ('~~');
    this.chain = [];

    return result;
  }
};

chainMaker.chain = [];

module.exports = chainMaker;
