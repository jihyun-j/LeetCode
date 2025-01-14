/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let newStr = ""
    for(let i=0; i < s.length; i++) {
        if(s[i] === 'i') {
           newStr = newStr.split('').reverse().join('')
        } else {
            newStr += s[i]
        }
    }

    return newStr
    
};