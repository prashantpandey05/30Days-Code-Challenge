// https://leetcode.com/problems/truncate-sentence

var truncateSentence = function (s, k) {
    for (let index = 0; index < s.length; index++) {
        if (s[index] === ' ') {
            k--;
        }
        if (k === 0) {
            return s.substring(0, index);
        }
    }
    return s;
};