/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []

    function backTracking(start, path) {
        result.push([...path])

        for(let i=start; i<nums.length; i++) {
            path.push(nums[i])
            backTracking(i+1, path)
            path.pop()
        }
    }

    backTracking(0,[])
    return result
};