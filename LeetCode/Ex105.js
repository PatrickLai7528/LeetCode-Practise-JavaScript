/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树。

 注意:
 你可以假设树中没有重复的元素。

 例如，给出

 前序遍历 preorder = [3,9,20,15,7]
 中序遍历 inorder = [9,3,15,20,7]
 返回如下的二叉树：

 3
 / \
 9  20
 /  \
 15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
   if (preorder.length === 0 || inorder.length === 0) return null;
   let root = new TreeNode(preorder[0]);
   let index = inorder.indexOf(root.val);
   let newPreLeft = [];
   let newPreRight = [];
   let newInLeft = [];
   let newInRight = [];
   for (let i = 0; i < inorder.length; i++) {
      if (i < index) {
         newInLeft.push(inorder[i])
      } else if (i > index) {
         newInRight.push(inorder[i]);
      }
   }
   for (let i = 0; i < preorder.length; i++) {
      if (i > newInLeft.length) {
         newPreRight.push(preorder[i]);
      }
      if (i > 0 && i < newInLeft.length + 1) {
         newPreLeft.push(preorder[i]);
      }
   }
   console.log(newPreLeft, newPreRight);
   console.log(newInLeft, newInRight);
   root.left = buildTree(newPreLeft, newInLeft);
   root.right = buildTree(newPreRight, newInRight);
   return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));