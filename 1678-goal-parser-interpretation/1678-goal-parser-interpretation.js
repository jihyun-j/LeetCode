/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result = []

    for(let i=0; i<=command.length; i++){
        if(command[i] === '(' && command[i+1] === ')') {
            result.push("o")
        } else if(command[i] === '(' || command[i] === ')') {
            result.filter((str) => str !==  "(" || str !== ")" )
        }else {
            result.push(command[i])
        }
    }
    return result.join('')
};