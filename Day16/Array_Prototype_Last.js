https://leetcode.com/problems/array-prototype-last

Array.prototype.last = function() {
    if (this.length === 0) {
      return -1;
    } else {
      return this[this.length - 1];
    }
  };