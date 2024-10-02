/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
   return date.split('-').map((num) => (num >>> 0).toString(2)).join('-')
};