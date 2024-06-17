// https://leetcode.com/problems/running-sum-of-1d-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for(i=0;i<nums.length;i++){
            if(i==0){
                nums[i]= nums[i]
            }else{
                nums[i]=nums[i-1]+nums[i]
        }
    }
    return nums
};