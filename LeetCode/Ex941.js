/**
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

 A.length >= 3
 在 0 < i < A.length - 1 条件下，存在 i 使得：
 A[0] < A[1] < ... A[i-1] < A[i]
 A[i] > A[i+1] > ... > A[B.length - 1]


 示例 1：

 输入：[2,1]
 输出：false
 示例 2：

 输入：[3,5,5]
 输出：false
 示例 3：

 输入：[0,3,2,1]
 输出：true


 提示：

 0 <= A.length <= 10000
 0 <= A[i] <= 10000
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function (A) {
   const max = Math.max(...A);
   const indexOfMax = A.indexOf(max);
   if (indexOfMax === 0 || indexOfMax === A.length - 1)
      return false;

   // should be up
   for (let i = 1; i <= indexOfMax; i++) {
      if (A[i] < A[i - 1])
         return false;
   }

   // should be down
   for (let i = indexOfMax + 1; i < A.length; i++) {
      if (A[i] >= A[i - 1])
         return false;
   }

   return true;
};

console.log(validMountainArray([3,5,5]));