/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    const nums = []
    let result = 0

    for(let i = 0; i < n; i++){
        nums[i] = start + 2 * i
        result = result ^ nums[i]
    }

    return result
};