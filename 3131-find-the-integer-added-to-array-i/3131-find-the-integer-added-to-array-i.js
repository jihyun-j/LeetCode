/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    const min_one = Math.min(...nums1)
    const min_two = Math.min(...nums2)

    return min_two - min_one
};