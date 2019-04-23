/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = function (root) {
   let stack = [];
   let res = [];
   stack.push(root);
   while (stack.length !== 0) {
      console.log(stack);
      let nodes = [];
      while (stack.length !== 0) {
         nodes.push(stack.pop());
      }
      res.push(Math.max(...nodes.map(node=>node.val)));
      for(let node of nodes){
         if(node.left) stack.push(node.left);
         if(node.right) stack.push(node.right)
      }
   }
   return res;
};
