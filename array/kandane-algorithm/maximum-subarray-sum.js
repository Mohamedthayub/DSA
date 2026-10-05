function maxSubArray(arr){
    let currentSum = arr[0];
    let maxSum = arr[0];
    for(let  i = 1; i<arr.length; i++){
        currentSum = Math.max(arr[i],currentSum + arr[i]);
        maxSum = Math.max(maxSum,currentSum)
    }
    return maxSum;
}
console.log(maxSubArray([2,6,8,1,4]));

/*
You are given an integer array arr[]. You need to find the maximum sum of a subarray (containing at least one element) in the array arr[].

Examples:

Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
Output: 11
Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.
Input: arr[] = [-2, -4]
Output: -2
Explanation: The subarray [-2] has the largest sum -2.
Input: arr[] = [5, 4, 1, 7, 8]
Output: 25
Explanation: The subarray [5, 4, 1, 7, 8] has the largest sum 25.

*/