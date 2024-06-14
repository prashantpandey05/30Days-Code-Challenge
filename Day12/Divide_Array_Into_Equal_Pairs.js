// https://leetcode.com/problems/divide-array-into-equal-pairs/

var divideArray = function(nums) {
    const numMap = new Map();
    for (const num of nums) {
      numMap.has(num) ? numMap.delete(num) : numMap.set(num, true);
    }
    return numMap.size === 0;
  };