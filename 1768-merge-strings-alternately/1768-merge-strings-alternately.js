/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let a = 0
    let b = 0
    let result = ""

    while(a < word1.length || b < word2.length){
        if(a < word1.length) {
            result = result.concat(word1[a])
            a++
        }

        if(b < word2.length) {
            result = result.concat(word2[b])
            b++
        }
    }
    
    return result
    
};