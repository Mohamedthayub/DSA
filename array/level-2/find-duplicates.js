function findDuplicates(arr){
    let frequency = new Map();
    for(let i = 0; i<arr.length; i++){
        if(!frequency.has(arr[i])){
            frequency.set(arr[i], 1);
        }
        else{
            frequency.set(arr[i],frequency.get(arr[i])+ 1);
        }
    }
    for(let[key,value] of frequency){
        if(value > 1){
            return key;
        }
    }
}
console.log(findDuplicates([1,2,2,3,4,5,6]));


/*
19. Find the Duplicate Number
Problem Statement

Given an array where one number appears more than once, find the duplicate number.

Example
Input:
[1, 3, 4, 2, 2]

Output:
2

Because:

1 → appears once
3 → appears once
4 → appears once
2 → appears twice
*/