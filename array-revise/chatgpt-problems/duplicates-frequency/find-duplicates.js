function findDuplicate(arr){
    let frequency =  new Map();
    for(let i = 0; i<arr.length; i++){
        if(!frequency.has(arr[i])){
            frequency.set(arr[i], 1);
        }
        else{
            frequency.set(arr[i],frequency.get(arr[i]) + 1);
        }
    }
    let duplicates = [];
    for(let[key,value] of frequency){
        if(value > 1){
            duplicates.push(key);
        }
    }
    return duplicates;
}
console.log(findDuplicate([1,1,1,2,2,2,3,3,4,5,6]));

// find the duplicate elements in the array 


/*
Level 3 — Duplicates and Frequency
Problem 16: Find All Duplicate Elements
Easy
 Array · Nested Loops · Hash Set


Problem statement:

Given an array of integers, find all elements that appear more than once in the array.

Return each duplicate element only once, even if it appears multiple times.

Examples:
Input:  [1, 2, 3, 2, 4, 1]
Output: [1, 2]

Input:  [5, 5, 5, 5]
Output: [5]

Input:  [1, 2, 3, 4, 5]
Output: []

Input:  [7, 2, 7, 2, 7, 3]
Output: [7, 2]


Constraints:
- 1 <= arr.length <= 10^5
- -10^4 <= arr[i] <= 10^4
- Return each duplicate only once.
- Preserve the order in which elements first become identified as duplicates (the second occurrence).
Edge cases to consider:
- Array containing only one element.
- All elements are identical.
- No duplicate elements.
- Negative numbers and zero.
*/