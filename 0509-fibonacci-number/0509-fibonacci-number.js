/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0 || n === 1 ) return n ;

    let x = 0;
    let y = 1;
    let curr = 0;

    for(let i=2; i<=n; i++){
        curr = y + x
        x = y
        y = curr
    }

    return curr
};