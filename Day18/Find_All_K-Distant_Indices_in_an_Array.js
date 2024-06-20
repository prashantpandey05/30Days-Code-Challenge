// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    const keyIndicies = nums.reduce((acc, num, i) => num === key ? [...acc, i] : acc, []);
    const res = [];

    let lastIndex = 0;
    for (const index of keyIndicies) {
        const startIndex = Math.max(lastIndex, index - k);
        lastIndex = Math.min(index + k, nums.length - 1) + 1;

        for (let i = startIndex; i < lastIndex; i++) {
            res.push(i);
        }
    }
}