/**
 * 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

 你可以按任意顺序返回答案。



 示例 1：

 输入：["bella","label","roller"]
 输出：["e","l","l"]
 示例 2：

 输入：["cool","lock","cook"]
 输出：["c","o"]


 提示：

 1 <= A.length <= 100
 1 <= A[i].length <= 100
 A[i][j] 是小写字母

 *
 *
 */

/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = function (A) {

   let map = new Map();
   for (let word of A) {
      let subMap = new Map();
      for (let ch of word.split("")) {
         if (subMap.has(ch)) {
            subMap.set(ch, subMap.get(ch) + 1);
         } else {
            subMap.set(ch, 1);
         }
      }
      for (let key of subMap.keys()) {
         if (map.has(key)) {
            map.set(key, Math.min(map.get(key), subMap.get(key)));
         } else if (word === A[0]) { // the first word
            map.set(key, subMap.get(key));
         }
      }
      for (let key of map.keys()) {
         if (!subMap.has(key)) {
            map.delete(key);
         }
      }
   }
   console.log(map);
   let ret = [];
   for (let key of map.keys()) {
      for (let i = 0; i < map.get(key); i++)
         ret.push(key);
   }
   console.log(ret);
};

commonChars(["bella", "label", "roller"]);