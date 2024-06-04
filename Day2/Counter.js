// https://leetcode.com/problems/counter/description/

function createCounter(start) {
    let count = start;
    return function() {
      return count++;
    }
  }