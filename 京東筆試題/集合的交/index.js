var main = (set1, set2) => {
   var o = {};
   for (var i = 0; i < set1.length; i++) {
      if (o[set1[i]] === undefined)
         o[set1[i]] = set1[i];
   }
   for (var i = 0; i < set2.length; i++) {
      if (o[set2[i]] === undefined)
         o[set2[i]] = set2[i];
   }

   return Object.keys(o);
};

var input = read_line();
while (input) {
   var n = parseInt(input.split(" ")[0]);
   var m = parseInt(input.split(" ")[1]);

   var A = [];
   var B = [];

   var str1 = "", str2 = "";
   while (A.length !== n) {
      str1 += read_line();
      A = str1.split(" ");
   }

   while (B.length !== m) {
      str2 += read_line();
      B = str2.split(" ")
   }

   print(main(A, B).join(" "));

   input = read_line();
}

console.log(main([6, 15, 23, 34, 35, 43], [9, 12, 13, 27, 28, 33, 40, 44, 49]));