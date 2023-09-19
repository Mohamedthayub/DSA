function twoSum(arr,target){
    arr.sort((a,b) => a - b);
    let left = 0;
    let right  = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum == target){
            return [left,right];
        }
        else if (sum < target){
            left++;
        }
        else{
            right --;
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15],9));
console.log(twoSum([2, 7, 11, 15],10));
/*

3. Two Sum II
Problem

You are given a sorted array of integers and a target value.

Find two numbers whose sum equals the target.

Return the indices of those two numbers.

Assume exactly one solution exists.

The array is 1-indexed.

Example 1
Input:
numbers = [2, 7, 11, 15]
target = 9

Output:
[1, 2]

Because:

2 + 7 = 9
Example 2
Input:
numbers = [2, 3, 4]
target = 6

Output:
[1, 3]

Because:

2 + 4 = 6
Example 3
Input:
numbers = [-1, 0]
target = -1

Output:
[1, 2]

Goal: Learn why a sorted array allows left/right pointers to move intelligently.
*/