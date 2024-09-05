/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b) => a-b)
    const majorityIndex = Math.floor(nums.length / 2)
    return nums[majorityIndex]
};