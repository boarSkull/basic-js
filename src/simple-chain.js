const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  members: [],
  getLength() {
    return this.members.length;
  },
  addLink(value) {
    if (value === null) {
    this.members.push('null');
      
    }else{
    this.members.push(value);}
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.members.length ||
      !Number.isInteger(position)
    ) {
    this.members = [];

      throw new Error('You can\'t remove incorrect link!');
    }
    this.members.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.members.reverse();
    return this;
  },
  finishChain() {
    let result = [];
    result.push('( ');
    for (let i = 0; i < this.members.length; i++) {
      if (i !== this.members.length - 1) {
        result.push(this.members[i]);
        result.push(' )~~( ');
      } else {
        result.push(this.members[i]);
      }
    }
    result.push(' )');
    this.members = [];
    return result.join('');
  },
};

module.exports = {
  chainMaker
};
