/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const mergedArr = [...items1, ...items2]
    const map = new Map()

    for(const [value, weight] of mergedArr) {
        if(map.has(value)) {
            map.set(value, map.get(value) + weight)
        } else {
            map.set(value, weight)
        }
    }

    return Array.from(map).sort((a,b)=> a[0]-b[0])

}