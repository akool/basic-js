const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  separator: '~~',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    
    return this;
  },
  removeLink(position) {
    if(!this.chain[position-1]) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position-1, 1);
    
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    
    return this;
  },
  finishChain() {
    const result = this.chain.join(this.separator);
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
