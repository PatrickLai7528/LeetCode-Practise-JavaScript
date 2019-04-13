/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function (words, pattern) {
   let test = (word) => {
      let set = {};
      let reverseSet = {};
      for (let i = 0; i < word.length; i++) {
         if (set[word[i]] === undefined) {
            set[word[i]] = pattern[i];
         } else if (set[word[i]] !== pattern[i]) {
            return false;
         }
         if(reverseSet[pattern[i]] === undefined){
            reverseSet[pattern[i]] = word[i];
         }else if(reverseSet[pattern[i]] !== word[i]){
            return false;
         }
      }
      return true;
   }

   let ret = [];

   for (let i = 0; i < words.length; i++) {
      if (test(words[i])) {
         ret.push(words[i]);
      }
   }
   return ret;
};
console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"));