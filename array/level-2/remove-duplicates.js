function removeDuplicates(arr){
    let duplicates = [];
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i] != arr[i+1]){
            duplicates.push(arr[i]);
        }

    }
    return duplicates;
}
console.log(removeDuplicates([10, 10, 20, 30, 30, 30, 40]))
/*
13. Remove Duplicates
Problem Statement

Given an array containing duplicate elements, create an array containing only unique elements.

Keep the first occurrence of each element.

Example
Input:
[1, 2, 2, 3, 4, 4, 5]

Output:
[1, 2, 3, 4, 5]
Another Example
Input:
[10, 10, 20, 30, 30, 30, 40]

Output:
[10, 20, 30, 40]
Think About

Ask yourself:

"Have I already seen this number?"

This problem introduces you to frequency tracking / hashing.
*/