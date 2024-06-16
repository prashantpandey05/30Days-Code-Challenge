// https://leetcode.com/problems/left-and-right-sum-differences

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    right = [0],left=[0],res=[]
    for(let i=0,j=nums.length-1;i<nums.length-1;i++){
        right.push(nums[i]+right[i])
        left.push(nums[j--]+left[i])
    }
    rev=left.reverse()
    for(let i=0;i<right.length;i++){
        res.push(Math.abs(rev[i]-right[i]))
    }
    return res
};