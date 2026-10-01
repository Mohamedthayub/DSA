let arr = [1,2,3,4,5];
let first = arr[0];
for(let j = 1; j<arr.length;  j++){
    arr[j - 1] = arr[j];
}
arr[arr.length - 1] = first;

console.log(arr);