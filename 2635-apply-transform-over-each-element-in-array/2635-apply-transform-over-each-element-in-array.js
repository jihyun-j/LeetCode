/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = []

    for(let i=0; i<arr.length; i++){
        const calc = fn(arr[i], i)
        result.push(calc)
    }

    return result
};