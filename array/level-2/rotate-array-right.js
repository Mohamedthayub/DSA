/*
17. Rotate Array Right
Problem Statement

Given an array and a number k, rotate the array to the right by k positions.

Example
Input:
Array = [1, 2, 3, 4, 5]
k = 2

Output:
[4, 5, 1, 2, 3]


The last two elements:

[4, 5]

move to the beginning.

Another Example
Input:
Array = [10, 20, 30, 40, 50]
k = 3

Output:
[30, 40, 50, 10, 20]
*/

let k = 2;
let arr =  [1,2,3,4,5];

k = arr.length  % k ;
let first = [];
let last = [];
for(let i = k; i<arr.length; i++){
    first.push(arr[i]);
}
for(let j = 0; j<k; j++){
    last.push(arr[j]);
}
console.log(first);
console.log(last);
let temp = [];
for(let t = 0; t<first.length; t++){
    temp[t] = first[t];
}
let index = first.length;
for(let r = 0; r < last.length; r++){
    temp[index] = last[r];
    index++;
}
console.log(temp);
