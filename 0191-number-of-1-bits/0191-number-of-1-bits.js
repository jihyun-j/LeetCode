/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const binary = n.toString(2).split('1').length - 1
    return binary
};