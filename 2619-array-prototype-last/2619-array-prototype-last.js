/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function() {
    let result = []

    if(this.length > 0) {
      this.forEach((el) => result.push(el))
    } else {
        return -1
    }
    return result.at(-1)
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */