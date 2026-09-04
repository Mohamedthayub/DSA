function reverseArrayInPlace(arr){
    for(let i  = 1; i<arr.length / 2; i++){
        let last = arr[arr.length - i];
        arr[arr.length -i] = arr[i-1];
        arr[i-1] = last;
    }
    return arr;
}
console.log(reverseArrayInPlace([1,2,3,4,5]));
console.log(reverseArrayInPlace([10,20,30,40,50]));
/*
11. Reverse an Array In-Place
Problem Statement

Given an array of integers, reverse the array without creating a new array.

The original array should be modified directly.

Example
Input:
[1, 2, 3, 4, 5]

Output:.
[5, 4, 3, 2, 1]
Another Example
Input:
[10, 20, 30, 40]

Output:
[40, 30, 20, 10]

Important: Try to solve this without using .reverse().

*/