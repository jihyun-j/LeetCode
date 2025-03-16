/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    let str = s.split('')

    while(left < right) {
       if(str[left] !== str[right]) {
        if(str[left].charCodeAt(0) < str[right].charCodeAt(0)){
            str[right] = str[left]
        } 
        if(str[left].charCodeAt(0) > str[right].charCodeAt(0)){
            str[left] = str[right]
        }
       }
        left++
        right--
    }

    return str.join('')
};