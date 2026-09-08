function findUnion(arr1,arr2){
    let union = [];
    let map = new Map();
    for(let i = 0; i<arr1.length; i++){
        if(!map.has(arr1[i])){
            map.set(arr1[i],1);
        }
    }
    for(let j = 0; j<arr2.length; j++){
        if(!map.has(arr2[j])){
            map.set(arr2[j],1);
        }
    }
    for(let[key,value] of map){
        union.push(key);
    }
    return union;   
}
console.log(findUnion([1,2,3],[3,4,5]));
/*
26. Union of Arrays
Problem Statement

Given two arrays, create an array containing all unique elements from both arrays.

Example
Input:
arr1 = [1, 2, 3]
arr2 = [3, 4, 5]

Output:
[1, 2, 3, 4, 5]

Notice that 3 appears in both arrays, but it appears only once in the result.

Another Example
Input:
arr1 = [1, 2, 2, 3]
arr2 = [2, 3, 4, 4]

Output:
[1, 2, 3, 4]

The main idea is:

Union = everything from both arrays
        without duplicates
*/
