function findTheElement(arr,target){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == target){
            return target + "exists in the array" 
        }
    }
    return target + "100 does not exist";
}
console.log(findTheElement([10, 25, 30, 45, 50],30));
/*
7. Search for an Element
Problem

Given an array and a target value, determine whether the target exists in the array.

Example
Array:
[10, 25, 30, 45, 50]

Target:
30

Output:

30 exists in the array
Another example
Array:
[10, 25, 30, 45, 50]

Target:
100

Output:

100 does not exist
*/