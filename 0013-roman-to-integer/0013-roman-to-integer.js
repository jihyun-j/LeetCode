/**
 * @param {string} s
 * @return {number}
 */


var romanToInt = function(s) {
    const romans = {
        'I': 1, 
        'V': 5, 
        'X': 10, 
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0
    
    for(let i = 0; i < s.length; i++){
        const curVal = romans[s[i]]
        const nextVal = romans[s[i+1]]

        if(curVal < nextVal) {
            total -= curVal
        } else {
            total += curVal
        }
    }

    return total
};