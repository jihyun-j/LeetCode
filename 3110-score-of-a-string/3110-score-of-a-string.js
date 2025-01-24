/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum = 0
    for(let i=0; i < s.length-1; i++){
        let a = +s.charCodeAt(i) 
        let b = +s.charCodeAt(i+1)
        sum += Math.abs(a-b)
    }

    return sum
};