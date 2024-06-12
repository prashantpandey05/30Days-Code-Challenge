// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target

var countPairs = function(nums, target) {
    //paso#1
  let respuesta = 0;
  const tamano = nums.length;

  //paso#2
  for (let i = 0; i < tamano; i++) {
    for (let j = i + 1; j < tamano; j++) {
      //paso#3
      if (nums[i] + nums[j] < target) {
        respuesta++;
      }
    }
  }

  //paso#4
  return respuesta;
};