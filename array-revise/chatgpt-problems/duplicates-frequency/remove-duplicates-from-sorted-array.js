function removeDuplicates(arr){
    let index = 0;
    for(let i = 0; i<arr.length -1; i++){
        if(arr[i] != arr[i+1]){
            index++;
            arr[index] = arr[i+1];
        }
    }
    return arr;
}
console.log(removeDuplicates([1,1,2,2,3,3])); 

// remove the duplicate elements from the sorted array  


/*
Problem 17: Remove Duplicates from a Sorted Array
Easy
 Array · Two Pointers


Problem statement:

Given a sorted array of integers in non-decreasing order, remove the duplicate elements so that every unique element appears only once.

Return the number of unique elements, and modify the original array so that its first k positions contain the unique elements in their original sorted order.

You do not need to worry about the elements beyond the first k positions.

Examples:
Input:  [1, 1, 2, 2, 3]
Output: k = 3
Array:  [1, 2, 3, _, _]

Input:  [0, 0, 1, 1, 2, 2, 3]
Output: k = 4
Array:  [0, 1, 2, 3, _, _, _]

Input:  [1, 2, 3, 4]
Output: k = 4
Array:  [1, 2, 3, 4]

Input:  [5, 5, 5, 5]
Output: k = 1
Array:  [5, _, _, _]


Constraints:
- 1 <= arr.length <= 3 * 10^4
- -100 <= arr[i] <= 100
- The array is already sorted.
- Modify the original array.
- Use O(1) extra space.
Edge cases to consider:
- All elements are duplicates.
- No duplicates.
- Only one element.
- Multiple consecutive duplicates.
Important: This problem tests your understanding of the Two Pointers technique.
*/