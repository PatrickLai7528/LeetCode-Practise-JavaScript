/**
 *
 * 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。

    示例 1:

    输入: "sea", "eat"
    输出: 2
    解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
    说明:

    给定单词的长度不超过500。
    给定单词中的字符只含有小写字母。
 *
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
   if (word1.indexOf(word2) !== -1)
      return word1.length - word2.length;
   if (word2.indexOf(word1) !== -1)
      return word2.length - word1.length;

   const total = word1.length + word2.length;
   let min = total;

   const compare = (word1, word2, offset) => {
      const substr1 = word1.substring(offset, word1.length);
      const substr2 = word2.substring(0, word2.length - offset);
      let ret = 0;
      for (let i = 0; i < substr1.length; i++) {
         if (substr1[i] === substr2[i])
            ret++;
      }
      console.log(JSON.stringify({offset, ret}));
      return ret;
   };

   for (let offset = 0; offset < total / 2; offset++) {
      let curr = total - compare(word1, word2, offset) * 2;
      if (curr < min)
         min = curr;
   }

   return min;
};

console.log(minDistance("sea","eat"));