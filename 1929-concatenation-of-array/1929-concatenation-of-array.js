/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let results = [...nums]
    for(let i=0; i<nums.length; i++){
        results.push(nums[i])
    }

    return results
};