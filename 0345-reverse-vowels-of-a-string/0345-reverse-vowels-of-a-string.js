/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let vowelArr = []
    let result = ''

    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
            vowelArr.push(s[i])
        } 
    }

    vowelArr.reverse()

    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i])) {
            result = result + vowelArr.shift()
        }else {
            result = result + s[i]
        }
     }

    return result
    
};