/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let chairs = 0
    let maxChairs = 0;

    for(let i=0; i < s.length; i++){
        if(s[i] === "E") {
            chairs ++
            maxChairs = Math.max(maxChairs, chairs);
        } else {
            chairs --
            if (chairs < 0) chairs = 0;
        }
    }

    return maxChairs; 
};