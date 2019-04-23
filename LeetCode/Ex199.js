/**
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 示例:

 输入: [1,2,3,null,5,null,4]
 输出: [1, 3, 4]
 解释:

 1            <---
 /   \
 2     3         <---
 \     \
 5     4       <---
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
   let res = [];
   let max = "";
   const doIt = (node, path) => {
      if (!node) return path;
      path += "" + node.val;
      if (node.left) path += "" + doIt(node.left, path);
      if (node.right) path += "" + doIt(node.right, path);
      if (!node.left && !node.right) {
         res.push(path);
         if (path.length > max.length)
            max = path;
      }
      return "";
   };
   doIt(root, "");
   if(res.length === 0) return [];
   if (max === res[res.length - 1]) return max.split("").map(n => parseInt(n));
   for(let i = res.length - 1; i >= 0; i--){
      let last = res[i];
      for(let j = 0; j < last.length; j++){
         max = max.substring(0, j) + last[j] + max.substring(j + 1, max.length);
      }
   }
   return max.split("").map(n => parseInt(n))
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(5);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(6);

console.log(rightSideView(root));