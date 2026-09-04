function copyArray(arr){
    let copy = [];
    for(let i = 0; i<arr.length; i++){
        copy.push(arr[i]);
    }
    return copy;
}
console.log(copyArray([1,2,3,4,5]));


/*
12. Copy an Array
Problem Statement

Given an array, create a new array containing all the elements of the original array.

The new array should be independent of the original array.

Example
Input:
[10, 20, 30, 40]

Output:
[10, 20, 30, 40]

Conceptually:

Original: [10, 20, 30, 40]
              ↓
Copy:    [10, 20, 30, 40]
Important Requirement

If the original array is changed later, the copied array should not be affected.
*/