/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const returnedArray = arr.map((num, index) => {
    return fn(num, index)
  })

  return returnedArray
};