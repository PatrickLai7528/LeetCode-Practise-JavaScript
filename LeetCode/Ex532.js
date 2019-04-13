/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = function (nums, k) {
   // 去重
   let set = new Set();
   let repeated = 0;
   for (let num of nums) {
      if (!set.has(num))
         set.add(num);
      else
         repeated++;
   }

   if (k <= 0) return set.size;

   let keys = Array.from(set.keys());
   let minus = [];
   for (let key of keys) {
      minus.push(key - k);
   }
   let res = 0;
   for (let m of minus) {
      if (keys.indexOf(m) !== -1)
         res++;
   }
   return res;
};

console.log(findPairs([1, 1, 1, 2, 2], 0));