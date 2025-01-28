/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    function gcd(a,b){
        while(b !== 0){
            let temp = b
            b = a % b
            a = temp
        }
        return a
    }

    const gcdLength = gcd(str1.length, str2.length)
    const prefix = str1.substring(0, gcdLength)

   if(prefix.repeat(str1.length / gcdLength)===str1 && 
    prefix.repeat(str2.length / gcdLength)===str2) {
        return prefix
    } else {
        return ""
    }
    
};