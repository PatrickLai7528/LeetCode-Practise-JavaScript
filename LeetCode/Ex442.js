/**
 * 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。

 找到所有出现两次的元素。

 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

 示例：

 输入:
 [4,3,2,7,8,2,3,1]

 输出:
 [2,3]
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
   let res = [];
   for (let i = 0; i < nums.length; i++) {
      let num = Math.abs(nums[i]);
      if (nums[num - 1] > 0) {
         nums[num - 1] *= -1;
      } else {
         res.push(num);
      }
   }
   return res;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));