/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let firstHalf = nums.splice(0, n)
    let secondHalf = nums
    let answer = []

    for(let i=0; i<n; i++){
        answer.push(firstHalf[i])
        answer.push(secondHalf[i])
    }

    return answer
};