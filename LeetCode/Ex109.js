/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
   this.val = val;
   this.next = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

var sortedListToBST = function (head) {
   let nums = [];
   while (head) {
      nums.push(head.val);
      head = head.next;
   }

   function doIt(start, end) {
      console.log(start, end);
      if (start >= end) return undefined;
      const mid = Math.floor((start + end) / 2);
      let root = new TreeNode(nums[mid]);
      root.left = doIt(start, mid);
      root.right = doIt(mid + 1, end);
      return root;
   }

   let root = doIt(0, nums.length);
   // console.log(root);
   return root;
};

let head = new ListNode(-10);
head.next = new ListNode(-3);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(9);


console.log(sortedListToBST(head));