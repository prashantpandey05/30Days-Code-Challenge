// https://leetcode.com/problems/number-of-good-pairs

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let c = 1
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j] && i < j && nums[j] != -1) {
                nums[j] = -1
                c++
            }
        }
        if (c > 1) {
            arr.push(c)
        }
    }
    let pairs = 0
    for (let i = 0; i < arr.length; i++) {
        pairs += (arr[i] * (arr[i] - 1)) / 2
    }
    return pairs
};