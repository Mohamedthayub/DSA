function removeDuplicates(arr){
    let k = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] != arr[k]){
            k++
            arr[k] = arr[i];
        }
    } 
    return k+1;
}
console.log(removeDuplicates([1,1,2,2,3,3,4,4,5,5]));




/*

4. Remove Duplicates From Sorted Array
Problem

Given a sorted array, remove duplicate values in-place so that every element appears only once.

Return the number of unique elements.

The first k positions of the array should contain the unique values.

Example 1
Input:
[1, 1, 2]

Output:
k = 2

Array:
[1, 2, ...]
Example 2
Input:
[0, 0, 1, 1, 1, 2, 2, 3]

Output:
k = 4

Array:
[0, 1, 2, 3, ...]
Example 3
Input:
[1, 2, 3]

Output:
k = 3

Array:
[1, 2, 3]

Goal: Learn same-direction / slow-fast pointers and in-place modification.
*/