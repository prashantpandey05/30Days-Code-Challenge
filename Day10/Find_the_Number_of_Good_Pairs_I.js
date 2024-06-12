// https://leetcode.com/problems/find-the-number-of-good-pairs-i

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let ans = 0;
    let n = nums1.length , m = nums2.length;
    const mp = new Map();
    for(var num of nums2)
    {
        mp.set(num,mp.has(num) ? mp.get(num) + 1 : 1);
    }
    for(var v of nums1)
    {
        if(v%k ==0)
        {
           const val = v/k;
           for(let i = 1 ; i <= Math.sqrt(val) ; i++)
           {
               if(val % i == 0)
               {
                  ans += mp.has(i) ? mp.get(i) : 0;
                  if(val / i != i)
                  {
                     ans += mp.has(val / i) ? mp.get(val / i) : 0;  
                  }
               }
           }
        }
    }
    return ans;
};