function findTheFrequency(arr){
    let frequency = new Map();
    for(let i = 0; i<arr.length; i++){
        if(!frequency.has(arr[i])){
            frequency.set(arr[i],1);
        }
        else{
            frequency.set(arr[i],frequency.get(arr[i]) + 1);
        }
    }
    return frequency;
}
console.log(findTheFrequency([1,1,2,2,3,3]));
/*
20. Find Frequency of Each Element
Problem Statement

Given an array, count how many times each element appears.

Example
Input:
[1, 2, 2, 3, 1, 1]

Output:

1 → 3
2 → 2
3 → 1

Because:

1 appears 3 times
2 appears 2 times
3 appears 1 time
*/