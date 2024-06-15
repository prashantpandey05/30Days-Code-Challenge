// https://leetcode.com/problems/find-words-containing-character

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let ans = [];
    for (let i = 0; i < words.length; i++) {
        words[i].includes(x)?ans.push(i):ans;
    }
    return ans;
};