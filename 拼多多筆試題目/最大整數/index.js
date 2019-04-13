const inputs = [3, 2, 1, 4];
let nums = [];
for (let i = 0; i < inputs.length; i++) {
   nums.push(inputs[i]);
}

nums.sort();
let max = 1;
if (nums.length >= 3) {
   let s = nums[0] * nums[1] * nums[2];
   let e = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
   max = Math.max(s, e);
} else {
   for (let i = 0; i < nums.length; i++) {
      max *= nums[i];
   }
}
console.log(max);