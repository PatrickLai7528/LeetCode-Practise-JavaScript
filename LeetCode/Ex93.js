/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
   let res = [];
   const dfs = (s, curr, res, depth, start) => {
      if (depth === 4 && start >= s.length) {
         res.push(curr);
      }else if(depth === 4){
         curr = "";
      }
      for (let i = 1; i <= 4; i++) {
         const added = s.substring(start, i);
         if (Number(added).valueOf() < 256) {
            curr += "" + added + ".";
            dfs(s, curr, res, depth + 1, start + i + 1);
         }
      }
   };

   dfs(s, [], res, 1, 0);
   return res;
};

restoreIpAddresses("25525511135");