/**
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

 示例 1:

 输入:
 11110
 11010
 11000
 00000

 输出: 1
 示例 2:

 输入:
 11000
 11000
 00100
 00011

 输出: 3
 */
/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
   if (grid.length === 0 || grid[0].length === 0) return 0;
   const m = grid.length - 1;
   const n = grid[0].length - 1;

   const dfs = (i, j) => {
      if (i < 0 || i > m) return;
      if (j < 0 || j > n) return;
      if (grid[i][j] !== "1") return;
      grid[i][j] = "*";
      dfs(i + 1, j);
      dfs(i, j + 1);
      dfs(i - 1, j);
      dfs(i, j - 1);
   };

   let res = 0;

   for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
         if (grid[i][j] === "1") {
            res++;
            dfs(i, j)
         }
      }
   }
   return res;
};

console.log(numIslands(
   [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"]
   ]
));