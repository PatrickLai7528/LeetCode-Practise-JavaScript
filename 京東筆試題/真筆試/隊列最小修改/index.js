var main = (arr) => {
   var res = 0;
   var length = arr.length;
   for (var i = 0; i < length; i++) {
      var curr = arr[i];
      if (curr !== i + 1) {
         var index = curr - 1;
         for (var j = i; j < index; j++) {
            arr[j] = arr[j + 1]
         }
         arr[index] = curr;
         i = -1;
         res++;
      }
   }
   return res;
   // var length = arr.length;
   // var dp = [];
   // dp[0] = 0;
   // for (var i = 1; i < length; i++) {
   //    if (arr[i] < arr[i - 1]) {
   //       dp[i] = dp[i - 1] + 1;
   //    } else {
   //       dp[i] = dp[i - 1];
   //    }
   // }
   // return dp[dp.length - 1];
};


// console.log(main([5,1,2,3,4]));
console.log(main([3, 1, 2]), 1,);
console.log(main([1, 2, 3, 4, 5]), 0);
console.log(main([5, 1, 2, 3, 4]), 1);
console.log(main([5, 2, 1, 3, 4]), 2);
console.log(main([5, 3, 2, 1, 4]), 3);
console.log(main([5, 3, 2, 1, 4]), 3);
console.log(main([5, 4, 3, 2, 1]), 4);