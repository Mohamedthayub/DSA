function isSorted(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}
console.log(isSorted([2,1,5,3,2]));
console.log(isSorted([1,2,3,4,5]));
/*
10. Check if an Array is Sorted
Problem

Given an array, determine whether the elements are arranged in ascending order.

Example 1
Input:
[1, 2, 3, 4, 5]

Output:
Sorted

Because:

1 < 2 < 3 < 4 < 5
Example 2
Input:
[1, 3, 2, 4, 5]

Output:
Not Sorted

Because:

3 > 2

The order is broken.
*/