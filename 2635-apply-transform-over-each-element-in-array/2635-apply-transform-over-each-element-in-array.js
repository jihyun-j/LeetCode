/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const returnedArray = arr.map((num, index) => {
    const newNum = num
    const newIndex = index

    return fn(newNum, newIndex)
  })

  return returnedArray
};