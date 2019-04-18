var main = (str) => {
   let length = str.length;

   var countOne = (str) =>{
      var sum = 0;
      var max = 0;
      for(var i = 0; i < str.length; i++){
         if(str[i] === "1")
            sum++;
         else
            sum = 0;

         max = Math.max(sum, max);
      }
      return max;
   };

   var res = 0;

   // i 為尾部向前移動元素的個數
   for(var i = 0; i < length; i++){
      var head = str.substring(0, length - i);
      var tail = str.substring(length - i, length);
      var curr = tail + head;
      var counter = countOne(curr);
      res = Math.max(counter, res);
   }
   return res;
};



// console.log(main("11011"));
console.log(main("101010101"));