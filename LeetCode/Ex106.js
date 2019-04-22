/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树。

 注意:
 你可以假设树中没有重复的元素。

 例如，给出

 中序遍历 inorder = [9,3,15,20,7]
 后序遍历 postorder = [9,15,7,20,3]
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
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

const buildTree = function (inorder, postorder) {
   if (inorder.length === 0 || postorder.length === 0) return null;
   let root = new TreeNode(postorder[postorder.length - 1]);
   let index = inorder.indexOf(root.val);
   let newInLeft = inorder.filter((n, i) => i < index);
   let newInRight = inorder.filter((n, i)=> i > index);
   let newPostLeft = [];
   let newPostRight = [];
   // // let leftLen = index;
   // // let rightLen = postorder.length - index - 1
   // for (let i = 0; i < inorder.length; i++) {
   //    if (i < index) {
   //       newInLeft.push(inorder[i]);
   //    } else if (i > index) {
   //       newInRight.push(inorder[i]);
   //    }
   //
   // }
   for (let i = 0; i < postorder.length; i++) {
      if (i > newInLeft.length - 1 && i !== postorder.length - 1) {
         newPostRight.push(postorder[i]);
      }
      if (i < newInLeft.length) {
         newPostLeft.push(postorder[i]);
      }
   }
   // console.log(newInLeft, newInRight);
   // console.log(newPostLeft, newPostRight);
   if (newInLeft.length !== 0 && newPostLeft.length !== 0)
      root.left = buildTree(newInLeft, newPostLeft);
   else if (newInLeft.length === 1 && newPostLeft.length === 1)
      root.left = new TreeNode(newInLeft[0]);
   if (newInRight.length !== 0 && newPostRight.length !== 0)
      root.right = buildTree(newInRight, newPostRight);
   else if (newInRight.length === 1 && newPostRight.length === 1)
      root.right = new TreeNode(newInRight[0]);
   return root;
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));