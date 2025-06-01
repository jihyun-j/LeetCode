/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const one = word1.join('')
    const two = word2.join('')

    return one === two ? true : false
    
};