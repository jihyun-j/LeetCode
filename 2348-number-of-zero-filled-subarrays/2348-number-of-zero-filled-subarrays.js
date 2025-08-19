/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0;
    let ans = 0

    for(let num of nums){
        if(num === 0){
            count ++
            ans = ans + count
        } else {
            count = 0
        }
    }

    return ans
};