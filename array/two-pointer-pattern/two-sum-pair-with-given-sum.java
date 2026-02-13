class Solution {
    boolean twoSum(int arr[], int target) {
        // code here
        if(arr.length <= 1){
            return false;
        }
        Arrays.sort(arr);
        int left = 0;
        int right = arr.length -1;
        while(left < right){
            int sum = arr[left] + arr[right];
            if(sum == target){
                return true;
            }
            else if (sum > target){
                right--;
            }
            else{
                left++;
            }
        }
        return false;
    }
}
/*
Given an array arr[] of integers and another integer target. Determine if there exist two distinct indices such that the sum of their elements is equal to the target.

Examples:

Input: arr[] = [0, -1, 2, -3, 1], target = -2
Output: true
Explanation: arr[3] + arr[4] = -3 + 1 = -2
Input: arr[] = [1, -2, 1, 0, 5], target = 0
Output: false
Explanation: None of the pair makes a sum of 0
Input: arr[] = [11], target = 11
Output: false
Explanation: No pair is possible as only one element is present in arr[]

*/