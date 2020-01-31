/**
 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

 两个相邻元素间的距离为 1 。

 示例 1:
 输入:

 0 0 0
 0 1 0
 0 0 0
 输出:

 0 0 0
 0 1 0
 0 0 0
 示例 2:
 输入:

 0 0 0
 0 1 0
 1 1 1
 输出:

 0 0 0
 0 1 0
 1 2 1
 注意:

 给定矩阵的元素个数不超过 10000。
 给定矩阵中至少有一个元素是 0。
 矩阵中的元素只在四个方向上相邻: 上、下、左、右。

 /**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
   const m = matrix.length - 1;
   const n = matrix[0].length - 1;
   let visited = [[]];
   for (let i = 0; i <= m; i++) {
      let list = [];
      for (let j = 0; j <= n; j++)
         list[j] = false;
      visited.push(list);
   }
   const dfs = (i, j) => {
      if (i < 0 || i > m || j < 0 || j > n) return Number.MAX_SAFE_INTEGER;
      if (matrix[i][j] === 0) return 0;
      if (visited[i][j]) return matrix[i][j];
      visited[i][j] = true;
      let top = dfs(i - 1, j);
      let bottom = dfs(i + 1, j);
      let left = dfs(i, j - 1);
      let right = dfs(i, j + 1);
      console.log(i, j);
      console.log(top, bottom, left, right);
      let min = Math.min(top, bottom, left, right) + 1;
      matrix[i][j] = min;
      return min;
   };

   for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
         if (!visited[i][j]) {
            dfs(i, j);
            visited[i][j] = true;
         }
      }
   }
   return matrix;
};

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]));