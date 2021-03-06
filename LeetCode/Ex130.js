/**
 * 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

 示例:

 X X X X
 X O O X
 X X O X
 X O X X
 运行你的函数后，矩阵变为：

 X X X X
 X X X X
 X X X X
 X O X X
 解释:

 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
   let m = board.length - 1;
   let n = board[0].length - 1;
   const dfs = (i, j) => {
      if (i >= 0 && i <= m && j >= 0 && j <= n && board[i][j] == 'X') {
         board[i][j] = "+";
         dfs(i, j + 1);
         dfs(i + 1, j);
         dfs(i - 1, j);
         dfs(i, j - 1);
      }
   };
   for (let i = 0; i <= m; i++) {
      if (board[i][0] == "O") dfs(i, 0);
      if (board[i][n] == "O") dfs(i, n);
   }
   for(let i = 0; i <=n;i++){
      if(board[0][i] == "O") dfs(0,i);
      if(board[m][i] == "O") dfs(m, i);
   }
   console.log(board)
   for(let i = 0; i <= m; i++){
      for(let j = 0; j <=n ; j++){
         if(board[i][j] == "O")
            board[i][j] = "X";
         else if(board[i][j] == "+")
            board[i][j] = "O";
      }
   }
};