/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

 你可以假设除了整数 0 之外，这个整数不会以零开头。

 示例 1:

 输入: [1,2,3]
 输出: [1,2,4]
 解释: 输入数组表示数字 123。
 示例 2:

 输入: [4,3,2,1]
 输出: [4,3,2,2]
 解释: 输入数组表示数字 4321。
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
   const digitsReversed = digits.reverse();
   digitsReversed[0] += 1;
   for(let i = 0; i < digitsReversed.length; i++){
      if(digitsReversed[i] >= 10){
         digitsReversed[i] -= 10;
         if(i === digitsReversed.length - 1){
            digitsReversed.push(1);
         }else{
            digitsReversed[i + 1] += 1;
         }
      }
   }
   return digitsReversed.reverse();
};

console.log(plusOne([1,2,3,4]));