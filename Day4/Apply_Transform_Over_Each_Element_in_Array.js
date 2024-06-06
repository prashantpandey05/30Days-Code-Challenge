// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

var map = function(arr, fn) {
    const transformedArr = [];
    for (let i = 0; i < arr.length; i++) {
      transformedArr[i] = fn(arr[i], i);
    }
    return transformedArr;
  };