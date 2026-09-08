function countFrequeny(arr){
    let frequency = new Map();
    for(let i = 0; i<arr.length; i++){
        if(!frequency.has(arr[i])){
            frequency.set(arr[i], 1);
        }
        else{
            frequency.set(arr[i], frequency.get(arr[i]) + 1);
        }
    }
    for(let [key,value] of frequency){
        console.log(`${key} -> ${value}`);
    }
}
countFrequeny([1, 2, 2, 3, 1, 1])
/*
22. Frequency Counting
Problem Statement

Given an array, count how many times each unique element appears.

Example
Input:
[1, 2, 2, 3, 1, 1]

Output:
1 → 3
2 → 2
3 → 1
Another Example
Input:
[10, 20, 10, 30, 20, 10]

Output:
10 → 3
20 → 2
30 → 1

This is one of the most important HashMap patterns.
*/
