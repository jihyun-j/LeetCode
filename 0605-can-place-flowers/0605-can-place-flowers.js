/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let flowerLength = flowerbed.length

    for(let i=0; i<flowerLength && n>0; i++) {
        if(flowerbed[i] === 0 &&( i === 0 || flowerbed[i-1] === 0) && (i === flowerLength-1 || flowerbed[i+1] === 0)) {
            flowerbed[i] = 1
            n--
            i++

            console.log(flowerbed, n)
        }
    }

    return n <= 0
    
};