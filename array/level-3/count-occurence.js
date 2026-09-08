
function countOccurence(arr,target){
    let occurence = new Map();
    for(let i = 0; i<arr.length; i++) {
        if(!occurence.has(arr[i])){
            occurence.set(arr[i],1);
        }
        else{
            occurence.set(arr[i],occurence.get(arr[i]) + 1);
        }
    }  
    for(let [key,value] of occurence){
        if(key == target){
            return value;
        }
    }
}
console.log(countOccurence([1, 2, 2, 3, 2, 4],2))
/*
27. Count Occurrences
Problem Statement

Given an array and a specific value, count how many times that value occurs in the array.

Example
Input:
arr = [1, 2, 2, 3, 2, 4]
target = 2

Output:
3

Because:

2 appears 3 times
Another Example
Input:
arr = [10, 20, 30, 20, 40]
target = 20

Output:
2
*/