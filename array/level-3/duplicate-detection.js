/*
24. Duplicate Detection
Problem Statement

Given an array, determine whether the array contains at least one duplicate element.

Return true if a duplicate exists and false otherwise.

Example
Input:
[1, 2, 3, 4, 2]

Output:
true

Because:

2 → appears twice
Another Example
Input:
[1, 2, 3, 4, 5]

Output:
false

There are no duplicate elements.

Think about: A HashSet is particularly useful here because it stores only unique values.
*/
function duplicate_detection(arr){
    let duplicate_count = new Map();
    for(let i = 0; i<arr.length; i++){
        if(!duplicate_count.has(arr[i])){
            duplicate_count.set(arr[i],1);
        }
        else{
            duplicate_count.set(arr[i],duplicate_count.get(arr[i]) + 1);
        }
    }
    for(let [key,value] of duplicate_count){
        if(value  >  1){
            return false;
        }
    }
    return true;
}
console.log(duplicate_detection([1, 2, 3, 4, 2]))