/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const arr = s.split('')
    let dic = {}

    for(let i=0; i < arr.length; i++) {
        if(!dic[arr[i]]){
            dic[arr[i]] = 1
        } else {
            dic[arr[i]] ++
        }
    }

    const frequency = Object.values(dic)
    for(let i=0; i < frequency.length; i++) {
       if(frequency[i] !== frequency[0]){
        return false
       }
    }
    return true
};