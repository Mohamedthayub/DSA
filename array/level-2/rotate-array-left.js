function rotate_array_left(arr,k){
    if(k  >  arr.length){
        k = k % arr.length
    }
    let temp = [];
    for(let i  = k; i<arr.length; i++){
        temp.push(arr[i]);
    }
    for(let j = 0; j<k; j++){
        temp.push(arr[j]);
    }
    for(let k = 0; k<arr.length; k++){
        arr[k] = temp[k];
    }
    return arr;
}
console.log(rotate_array_left([1,2,3,4,5],5));
/*
16. Rotate Array Left
Problem Statement

Given an array and a number k, rotate the array to the left by k positions.

Example
Input:
Array = [1, 2, 3, 4, 5]
k = 2

Output:
[3, 4, 5, 1, 2]

Think of the first two elements:

[1, 2]

moving from the beginning to the end.

Another Example
Input:
Array = [10, 20, 30, 40, 50]
k = 3

Output:
[40, 50, 10, 20, 30]
*/