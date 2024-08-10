/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentValue = init
    
    const increment = () => ++ currentValue 
    const decrement = () => -- currentValue  
    const reset = () => currentValue = init
   
    return {increment,  decrement, reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */