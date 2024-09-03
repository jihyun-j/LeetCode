/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let result = {} 

    this.map((item) => { 
        const key = fn(item)

        if(!result[key]){
            result[key] = []
        }
        
        result[key].push(item)
    })
    
    return result


};

/**
    this -> array e.g.[ { id: '1' }, { id: '1' }, { id: '2' } ]
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */