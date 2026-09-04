function findSecondLargest(arr){
    let largest = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    let Slargest = -1;
    for(let j = 0; j<arr.length; j++){
        if(arr[j] != largest && arr[j] > Slargest){
            Slargest = arr[j];
        }
    }
    return Slargest;
}
console.log(findSecondLargest([1,2,3,4,5]));
/*

9. Find the Second Largest Element
Problem

Given an array of integers, find the second largest distinct element.

Example
Input:
[10, 5, 20, 8, 15]

Output:
15

Because:

Largest = 20
Second largest = 15
Important example
Input:
[10, 20, 20, 5, 15]

Output:
15

Why?

Because we're looking for the second largest distinct value.

The distinct values are:

5, 10, 15, 20

Therefore:

Largest = 20
Second largest = 15
Think about

Don't immediately sort the array.

Try to solve it by keeping track of:

largest
secondLargest

This is excellent practice for learning how to maintain multiple pieces of information while traversing an array.
*/