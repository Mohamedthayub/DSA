
function reverseArray(arr){
    let reverse  = [];
    for(let i = 1; i<=arr.length; i++){
        reverse[i-1] = arr[arr.length-i];
    }
  
    return reverse;
}
console.log(reverseArray([1,2,3,4,5]));
/*
8. Reverse an Array
Problem

Given an array, reverse the order of its elements.

Example
Input:
[1, 2, 3, 4, 5]

Output:
[5, 4, 3, 2, 1]

Another example:

Input:
[10, 20, 30, 40]

Output:
[40, 30, 20, 10]
Think about

The first element should move to the last position.

Original:

1  2  3  4  5
↑           ↑
first       last

After reversing:

5  4  3  2  1

💡 Challenge: Try solving this without creating another array. This will prepare you for the two-pointer pattern later.
*/

