/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    const totalSingle = nums.filter((num) => Math.abs(num) < 10).reduce((cur, acu) => cur+acu,0)
    const totalDouble = nums.filter((num) => Math.abs(num) >= 10).reduce((cur, acu) => cur+acu,0)
    
    return totalSingle !== totalDouble  ? true : false
};