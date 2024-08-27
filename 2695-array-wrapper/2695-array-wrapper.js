/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.sumNums = nums.reduce((acc, cur) => acc + cur, 0)
    this.stringArr = `[${nums}]`
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.sumNums
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return this.stringArr
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */