/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    let map = new Map()

    for (let str of s){
        map.set(str, (map.get(str) || 0) +1)
    }

    for (let str of t){
        if(!map.has(str) || map.get(str) === 0){
            return false
        }

        map.set(str, map.get(str) - 1)
    }

    return true
};