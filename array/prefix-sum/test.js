// let arr = [1,2,3,4,5];
// let prefix = [];
// prefix[0] = arr[0];
// for(let i = 1; i < arr.length ; i++){
//     prefix[i] = prefix[i-1] + arr[i];
// }
// console.log(prefix);

// RunninSum Problem

let nums = [1,2,3,4,5];
let sum = 0;
for(let i = 0; i<nums.length; i++){
    sum = sum + nums[i];
    nums[i] = sum;
}
console.log(nums);