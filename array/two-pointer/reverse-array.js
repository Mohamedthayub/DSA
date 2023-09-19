function reverseArray(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let temp = arr[right];
        arr[right] = arr[left]
        arr[left] = temp;
        left++;
        right--;
    }
    return arr;
}
console.log(reverseArray([1,2,3,4,5]));

/*
1. Reverse an Array Using Two Pointers
Problem

Given an array of integers, reverse the array in-place using the two-pointer technique.

You should not create another array to store the result.

Example 1
Input:
[1, 2, 3, 4, 5]

Output:
[5, 4, 3, 2, 1]
Example 2
Input:
[10, 20, 30, 40]

Output:
[40, 30, 20, 10]
Example 3
Input:
[1, 2]

Output:
[2, 1]

Goal: Learn opposite-direction pointers.
*/