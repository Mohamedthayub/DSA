function findAppearsOnce(arr){
    let frequency = new Map();
    for(let i = 0; i<arr.length; i++){
        if(!frequency.has(arr[i])){
            frequency.set(arr[i],1);
        }
        else{
            frequency.set(arr[i],frequency.get(arr[i]) + 1);
        }
    }
    for(let [key,value] of frequency){
        if(value == 1){
            return key;
        }
    }
    return -1;
}
console.log(findAppearsOnce([1,2,2,3,3,4,4,5,5]));



/*
Problem 19: Find the Element That Appears Only Once
Easy
 Array · Hashing · XOR


Problem statement:

You are given a non-empty array of integers where every element appears exactly twice, except for one element that appears only once.

Find and return the element that appears only once.

Your solution should ideally use O(n) time complexity and O(1) extra space.

Examples:
Input:  [2, 3, 2, 4, 4]
Output: 3

Input:  [5, 1, 5, 2, 2]
Output: 1

Input:  [7]
Output: 7

Input:  [10, 20, 30, 20, 10]
Output: 30


Constraints:
- 1 <= arr.length <= 3 * 10^4
- Array length is odd.
- Every element appears exactly twice except one.
- The unique element appears exactly once.
Edge cases to consider:
- Array contains only one element.
- Unique element appears at the beginning.
- Unique element appears at the end.
- Negative integers.
Challenge: First solve using Map. Then try solving using the XOR operator (^).
*/
