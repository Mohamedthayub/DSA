function findSmallestElement(arr){
    let smallest = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(smallest > arr[i]){
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log(findSmallestElement([1,2,3,5]));

/*
2. Find the Smallest Element
Problem

Given an array of integers, find the smallest element in the array.

Example
Input:
[8, 3, 15, 2, 10]

Output:
2
Another example
Input:
[-4, -10, -2, -7]

Output:
-10
Think about

You need to keep track of the smallest value found so far.
*/