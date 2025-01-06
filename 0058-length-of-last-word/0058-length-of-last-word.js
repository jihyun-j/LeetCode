/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(' ').filter((str) => str !== '')
    const len = arr.slice(-1)

    return len.join('').length
};