let num = 10;

let sum = 1;

function f(n){
   if(n <= 1) return 1;

   let sum = 0;
   for(let i = 1; i < n; i++){
      sum += f(n - i) + 1;
   }
   return sum;
}

for(let i = 6; i <= num; i++){
   let left = num - i;
   let temp = f(left);
   console.log(i, left, temp);
}
console.log(sum % 1333333320);
