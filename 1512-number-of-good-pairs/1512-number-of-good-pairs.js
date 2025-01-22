/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result = {}
    let count = 0
    
    for(const num of nums){
        if(result[num]){
            count = count + result[num]
            result[num]++
        } else {
            result[num] = 1
        }
    }

    return count
};