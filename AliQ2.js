function getBracketList(n) {
   const backTrack = (res, curr, open, close, target) => {
      if (curr.length === target * 2) {
         res.push(curr);
         return;
      }
      if (open < target)
         backTrack(res, curr + "[", open + 1, close, target);
      if (close < open) ;
      backTrack(res, curr + "]", open, close + 1, target);
   }

   let res = [];
   backTrack(res, "", 0, 0, n);
   return res;

}

console.log(getBracketList(3));