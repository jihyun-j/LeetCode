/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const set = new Set()
    const map = new Map()

    for(let num of arr){
        map.set(num, (map.get(num) || 0)+1)
    }

    for (let count of map.values()) {
        if(set.has(count)){
            return false
        }
        set.add(count)
    }
    return true
};