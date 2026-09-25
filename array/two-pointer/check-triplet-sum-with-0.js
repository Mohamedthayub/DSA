
class Solution {
    findTriplets(arr) {
        // code here
        
        arr.sort((a,b) => a - b);
             for(let i = 0; i<arr.length; i++){
                 let left = i+1;
                 let right= arr.length -1;
                 while(left < right){
                 let sum = arr[left] + arr[right] + arr[i];
                 if(sum == 0){
                     return true;
                 }
                 else if(sum < 0){
                     left++;
                 }
                 else{
                     right--;
                 }
             }
             }

        return false;
    }
}
/*
Given an array arr[] of integers, find if it contains a triplet whose sum equals zero.

Examples:

Input: arr[] = [0, -1, 2, -3, 1]
Output: true
Explanation: The triplet [0, -1, 1] has a sum equal to zero.
Input: arr[] = [1, 2, 3]
Output: false
Explanation: No triplet with a sum of zero exists.
Input: arr[] = [-5, 3, 2, -1, 0, 1]
Output: true
Explanation: The triplet [-5, 3, 2] has a sum equal to zero.
*/