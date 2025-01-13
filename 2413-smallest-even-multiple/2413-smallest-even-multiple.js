/**
 * @param {number} n
 * @return {number}
 */



var smallestEvenMultiple = function(n) {
    function gcd(a,b){
        while(b!==0){
            [a,b] = [b, a % b]
        }
        return a
    }

    return (2 * n) / gcd(2, n)
};