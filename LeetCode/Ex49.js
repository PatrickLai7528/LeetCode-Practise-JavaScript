/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
   if (strs.length === 0) return [];
   let set = {};
   for(let str of strs){
      let arr = str.split("");
      arr.sort();
      if(set[arr] === undefined)
         set[arr] = [str];
      else
         set[arr].push(str);
   }
   return Object.values(set);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));