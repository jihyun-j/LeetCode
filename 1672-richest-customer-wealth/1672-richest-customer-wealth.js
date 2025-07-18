/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const result = []
    for(const nums of accounts){
        const sum = nums.reduce((acc, cur) => acc + cur, 0)
        result.push(sum)
    }

    return Math.max(...result)
};