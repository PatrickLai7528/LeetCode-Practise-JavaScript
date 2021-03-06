/**
 * 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。

 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)

 示例 1:

 [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
 对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。

 示例 2:

 [[0,0,0,0,0,0,0,0]]
 对于上面这个给定的矩阵, 返回 0。

 注意: 给定的矩阵grid 的长度和宽度都不超过 50。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
   const m = grid.length - 1;
   const n = grid[0].length - 1;
   let max = 0;
   let sum = 0;

   const dfs = (i, j) => {
      if(i < 0 || i > m || j < 0 || j > n) return;
      if(grid[i][j] !== 1) return;
      grid[i][j] = -1
      sum++;
      dfs(i, j + 1);
      dfs(i+1, j);
      dfs(i - 1, j);
      dfs(i, j - 1);
   };

   for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
         if (grid[i][j] === 1) {
            sum = 0;
            dfs(i, j);
            max = Math.max(sum, max);
         }
      }
   }
   return max;
};