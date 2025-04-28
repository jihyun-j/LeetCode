/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let minStep = 1
    let maxStep = 2

    if(n <= 2) return n

    for(let i=3; i<=n; i++) {
        let prevStep = minStep + maxStep
        minStep = maxStep
        maxStep = prevStep
    }

    return maxStep 
};