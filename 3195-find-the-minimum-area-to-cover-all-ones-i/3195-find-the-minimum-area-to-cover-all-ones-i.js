/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    let minRow = grid.length 
    let maxRow = 0
    let minCol = grid[0].length 
    let maxCol = 0

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === 1){
                minRow = Math.min(minRow, i)
                maxRow = Math.max(maxRow, i)
                minCol = Math.min(minCol, j)
                maxCol = Math.max(maxCol, j)
            } 
        }
    }

    return (maxRow - minRow + 1) * (maxCol - minCol + 1)
    
};