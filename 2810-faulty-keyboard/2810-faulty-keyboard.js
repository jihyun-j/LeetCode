/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let newStr = []
    s.split('')

    for(let i=0; i < s.length; i++) {
        if(s[i] === 'i'){
            newStr.reverse()
        } else {
            newStr.push(s[i])
        }
        
    }

    return newStr.join('')
    
};