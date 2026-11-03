function  findCommonElements(arr1,arr2){
    let common = [];
    for(let i = 0; i<arr2.length; i++){
        if(arr1.includes(arr2[i])){
            common.push(arr1[i]);
        }
    }
    return common;
}
console.log(findCommonElements([1,2,3],[1,2,3]));
/*
Problem 21: Find Common Elements in Two Arrays
Easy
 Array · Hashing · Set


Problem statement:

You are given two arrays of integers.

Find all elements that are present in both arrays.

Return each common element only once, regardless of how many times it appears in either array.

Return the result in the order in which the elements first appear in the first array.
*/