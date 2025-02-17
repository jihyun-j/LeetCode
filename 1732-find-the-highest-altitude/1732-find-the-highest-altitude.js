/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitude = 0
    let max = 0
    
    for(let i=0; i<gain.length; i++) {
        altitude = altitude + gain[i]
        max = Math.max(max, altitude)
    }

    return max
};