/**
请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。



举个例子，如上图所示，给定一颗叶值序列为 (6, 7, 4, 9, 8) 的树。

如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

 

提示：

给定的两颗树可能会有 1 到 100 个结点。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/leaf-similar-trees
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
	const leaf1 = [];
	const leaf2 = [];

	const isLeaf = root => !root.right && !root.left;

	const loop = (node, arr) => {
		if (node) {
			loop(node.left, arr);
			loop(node.right, arr);
			if (isLeaf(node)) {
				arr.push(node.val);
			}
		}
	};

	if (!root1 && !root2) return true;
	else if (!root1 || !root2) return false;
	else {
		loop(root1, leaf1);
		loop(root2, leaf2);
	}

	if (leaf1.length !== leaf2.length) {
		return false;
	}

	for (let i = 0; i < leaf1.length; i++) {
		if (leaf1[i] !== leaf2[i]) return false;
	}
	return true;
};
