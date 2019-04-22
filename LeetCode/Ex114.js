/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

const flatten = function (root) {
   let curr = root;
   while (curr) {
      const leftTree = curr.left;
      const rightTree = curr.right;

      // 將左子樹放右子樹
      if (leftTree) {
         curr.right = leftTree;
         curr.left = undefined;

         // 找到原左子樹最右元素，將原右子樹放置到該元素

         let temp = leftTree.right;
         if (temp) {
            while (temp.right) {
               temp = temp.right;
            }
            temp.right = rightTree;
         } else {
            leftTree.right = rightTree;
         }
      }

      curr = curr.right;
   }
   console.log(root.right.right.right.right)
};


let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

console.log(flatten(root));
