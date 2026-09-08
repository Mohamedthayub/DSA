function findInterSectionArray(arr1,arr2){
    let map = new Map();
    let intersection = [];
    for(let i = 0; i<arr1.length; i++){
        if(!map.has(arr1[i])){
            map.set(arr1[i],true);
        }
    }
    for(let j = 0; j<arr2.length; j++){
        if(map.has(arr2[j])){
            if(!intersection.includes(arr2[j])){
                intersection.push(arr2[j]);
            }
        }
    }
    return intersection;
}

console.log(findInterSectionArray([1, 2, 3, 4], [3, 4, 5, 6]));

/*
25. Intersection of Arrays
Problem Statement

Given two arrays, find the elements that are present in both arrays.

The intersection should contain each common value only once.

Example
Input:
arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]

Output:
[3, 4]

Because 3 and 4 exist in both arrays.

Another Example
Input:
arr1 = [1, 2, 2, 3]
arr2 = [2, 2, 4]

Output:
[2]

Even though 2 appears multiple times, the result contains it only once.
*/