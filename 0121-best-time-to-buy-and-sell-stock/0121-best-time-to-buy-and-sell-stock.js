/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let totalProfit = 0
   let min = prices[0]

   for(const value of prices) {
        totalProfit = Math.max(totalProfit, value - min )
        min = Math.min(min, value)
   }
   return totalProfit
};