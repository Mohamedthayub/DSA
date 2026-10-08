// let num = 10;
// let count = 0;
// for(let i = 1; i<=num; i++){
//     if(i  % 3 == 0 || i % 5 == 0 || i %  7 == 0){
//         count = count + i ;
//     }

// }
// console.log(count);

// let arr = [3,5,7,9];
// let result = arr[0];
// for(let i = 1; i<arr.length; i++){
//     result = result ^ arr[i];
// }
// console.log(result);


let nums =  [-4,-1,0,3,10];
let squares = [];
for(let i = 0; i<nums.length; i++){
    squares.push(nums[i] * nums[i]);
}
squares.sort((a,b ) => a- b);
console.log(squares);