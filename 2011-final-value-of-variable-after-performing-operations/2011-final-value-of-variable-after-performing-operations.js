/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let start = 0

    for(let i=0; i<operations.length; i++){
        if(operations[i] === "++X" || operations[i] === "X++") {
            start = start + 1
        } else {
            start = start - 1
        }
    }
    return start
};