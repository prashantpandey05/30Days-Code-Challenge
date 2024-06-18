// https://leetcode.com/problems/sort-the-people

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return names.map((name,i)=>{
                 return {name:name,height:heights[i]}
                })
                .sort((a,b)=>(b.height-a.height))
                .map(obj=>obj.name)
};