/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const result = []

    for(let i = 0; i < grid.length-2; i++){
        const row = []
        for(let j = 0; j < grid.length-2; j++){
            const maxVal = Math.max(
                ...grid.slice(i, i+3).flatMap(row => row.slice(j, j+3))
            )
            row.push(maxVal)
        }
        result.push(row)
    }
    return result
};