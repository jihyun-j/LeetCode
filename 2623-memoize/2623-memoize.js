/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
   let cached = new Map() 
    
    return function(...args) {
        let key = String(args)
        if(cached.has(key)){
            return cached.get(key)
        } else {
            let result = fn(...args)
            cached.set(key, result)
            return result
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */