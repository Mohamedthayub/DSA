function findLargestElement(arr){
    let largest = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]  > largest){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargestElement([1,2,3,4,5]))
/*
1. Find the Largest Element
Problem

Given an array of integers, find the largest element in the array.

Example
Input:
[4, 12, 7, 25, 9]

Output:
25
Another example
Input:
[-5, -2, -10, -1]

Output:
-1
Think about

You need to compare every element with the current largest value
*/