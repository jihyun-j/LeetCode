/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [] 

    for(let asteroid of asteroids) { 
        while(stack.length 
            && asteroid < 0 
            && stack[stack.length-1] > 0) {

        let lastNum = stack[stack.length - 1]

        if(lastNum < -asteroid) {
            stack.pop()
            continue
        } else if(lastNum === -asteroid) {
            stack.pop()
        }

        asteroid = 0
        break
        }

        if(asteroid !== 0) stack.push(asteroid)
    }

    return stack
    
};