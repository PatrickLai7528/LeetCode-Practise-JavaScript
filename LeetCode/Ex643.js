/**
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

 示例 1:

 输入: [1,12,-5,-6,50,3], k = 4
 输出: 12.75
 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75


 注意:

 1 <= k <= n <= 30,000。
 所给数据范围 [-10,000，10,000]。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
   let maxAvg = Number.MIN_SAFE_INTEGER;
   for (let i = 0; i < nums.length - k + 1; i++) {
      const values = nums.slice(i, i + k);
      console.log(values);
      let sum = values.reduce((previous, current) => current += previous);
      let avg = sum / values.length;
      maxAvg = Math.max(maxAvg, avg);
   }
   return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));