//  https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    const sortedByValue = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    let out = sortedByValue.slice(0, k).map(entry => entry[0]);
    
    return out;
};
