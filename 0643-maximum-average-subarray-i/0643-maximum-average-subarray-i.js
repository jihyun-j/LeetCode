/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let numSum = nums.slice(0, k).reduce((a,b) => a+b,0)
    let maxSum = numSum
    
    for(let i=k; i<nums.length; i++) {
        numSum = numSum + nums[i] - nums[i-k]
        maxSum = Math.max(maxSum, numSum)
    }
    
    return maxSum / k
};