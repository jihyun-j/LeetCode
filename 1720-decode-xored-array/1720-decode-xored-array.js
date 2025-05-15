/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let arr = []
    arr[0] = first

    for(let i=0; i<encoded.length; i++){
        arr[i+1] = encoded[i] ^ arr[i]
    }

    return arr
};