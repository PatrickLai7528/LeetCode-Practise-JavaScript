/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

 示例:

 给定有序数组: [-10,-3,0,5,9],

 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

 0
 / \
 -3   9
 /   /
 -10  5
 在真实的面试中遇到过这道题？

 是

 否
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
   const doIt = (start, end) => {
      if (start >= end) return null;
      const mid = Math.floor((start + end) / 2);
      let root = {val: nums[mid]};
      root.left = doIt(start, mid);
      root.right = doIt(mid + 1, end);
      return root;
   };
   return doIt(0, nums.length);
};

console.log(sortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8]));