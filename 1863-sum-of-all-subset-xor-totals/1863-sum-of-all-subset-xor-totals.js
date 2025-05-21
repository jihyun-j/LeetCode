/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let total = 0

    function backTracking(idx, currXor) {
        if(nums.length === idx) {
            total = total + currXor
            return
        }
    
    backTracking(idx + 1, currXor)
    backTracking(idx + 1, currXor ^ nums[idx])
    }

    backTracking(0, 0)
    return total    
};