// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function(nums, n) {
    let i = 0
    let count = 2*n
    let newArr = []
    while(count){
        newArr.push(nums[i++])
        newArr.push(nums[n++])
        count=count-2
    }
    return(newArr)
};