/**
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。



 示例 1：

 输入： A = "ab", B = "ba"
 输出： true
 示例 2：

 输入： A = "ab", B = "ab"
 输出： false
 示例 3:

 输入： A = "aa", B = "aa"
 输出： true
 示例 4：

 输入： A = "aaaaaaabc", B = "aaaaaaacb"
 输出： true
 示例 5：

 输入： A = "", B = "aa"
 输出： false


 提示：

 0 <= A.length <= 20000
 0 <= B.length <= 20000
 A 和 B 仅由小写字母构成。
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
   if (A.length !== B.length) return false;
   let diff = [];
   let a = A.split("");
   let b = B.split("");
   a.forEach((t, i)=>{
      if(t !== b[i])
         diff.push(i);
   });
   if(diff.length === 1 || diff.length > 2) return false;
   if(diff.length === 0){
      return new Set(a).size !== a.length;
   }
   return a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]];

};

console.log(buddyStrings("abcaa", "abcbb"));