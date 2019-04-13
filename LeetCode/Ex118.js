/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
   let res = [];
   for (let i = 0; i < numRows; i++) {
      res[i] = [];

      // 第一個和最後一個都是1
      res[i][0] = 1;
      res[i][i] = 1;

      for (let j = 1; j < i; j++) {
         res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
      }

   }
   return res;
};

console.log(generate(5));