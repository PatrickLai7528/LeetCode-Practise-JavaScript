/**
 * 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

 示例 1:

 输入: [1,3,4,2,2]
 输出: 2
 示例 2:

 输入: [3,1,3,4,2]
 输出: 3
 说明：

 不能更改原数组（假设数组是只读的）。
 只能使用额外的 O(1) 的空间。
 时间复杂度小于 O(n2) 。
 数组中只有一个重复的数字，但它可能不止重复出现一次。

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
   let map = new Map();
   for(let i = 0; i < nums.length; i ++){
      if(map.has(nums[i])){
         map.set(nums[i], map.get(nums[i]) + 1);
      }else{
         map.set(nums[i], 1);
      }
   }
   for(let key of map.keys()){
      if(map.get(key) > 1){
        return key;
      }
   }
   return -1;
};