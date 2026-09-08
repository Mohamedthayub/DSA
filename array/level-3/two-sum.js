function find_sum(arr,target){
    let map = new Map();
    for(let i = 0; i<arr.length; i++){
        let sum = target - arr[i];
        if(map.has(sum)){
            return [map.get(sum),i];
        }
        map.set(arr[i],i)
    }
    return [];
}
console.log(find_sum([2,7,11,15],0));
/*
21. Two Sum
Problem Statement

Given an array of integers and a target value, find two elements whose sum equals the target.

Return their indices.

Example
Input:
arr = [2, 7, 11, 15]
target = 9

Output:
[0, 1]

Because:

arr[0] + arr[1]
2 + 7 = 9
Another Example
Input:
arr = [3, 2, 4]
target = 6

Output:
[1, 2]

Because:

2 + 4 = 6

Think about: While looking at a number, how can you quickly know whether the number you need has already appeared?

*/