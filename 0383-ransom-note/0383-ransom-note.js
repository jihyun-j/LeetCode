/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hash = {} 

    for(let char of magazine){
       hash[char] = ( hash[char] || 0 ) + 1
    }

    for(let char of ransomNote){
        if(!hash[char] || hash[char] <=0) {
            return false
        }

        hash[char]--
    }

    return true
    
};