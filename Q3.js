// let n = readline();

let nums = [3,5, 6];

function test(a, b){
   if(a % b === 0){
      return (a / b) / 2;
   }else if(b % a === 0){
      return (b / a) / 2;
   }else{
      let c1 = 0;
      let c2 = 0;
      while(a >= 2){
         a /= 2;
         c1++;
      }
      while(b >= 2){
         b /= 2;
         c2++;
      }
      return c1 > c2 ? c1 : c2;
   }
}

let max = 0;

for(let i = 0; i < nums.length; i++){
   for(let j = 0; j < nums.length; j++){
      if(i === j)
         continue;

      let v = test(nums[i], nums[j]);
      console.log(v);
      if(v > max)
         max = v;
   }
}
console.log(max);