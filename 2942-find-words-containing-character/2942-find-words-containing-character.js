/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
  return words.reduce((res, word, idx) => word.includes(x) ? [...res, idx] : res, [])
};