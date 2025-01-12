/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const arr = s.split(' ').map((str) => Number(str)).filter((num) => num)
    for(let i = 0; i < arr.length; i++){
       if(arr[i] <= arr[i-1]){
        return false
       }
    }
    return true
    
};