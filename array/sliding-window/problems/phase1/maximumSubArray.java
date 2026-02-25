public class Main{
    static int  subArray(int[] arr,int k){
        
        if(arr.length  == 0  || k > arr.length || k <= 0){
            return 0;
        }
        int maxSum = Integer.MIN_VALUE;
        for(int i = 0; i<=arr.length - k ; i++){
            int sum = 0;
            for(int j = i; j<k + i; j++){
                sum  = sum + arr[j];
            }
            if(sum > maxSum){
                maxSum = sum;
            }
        }
        return maxSum;
    }
    public static void main(String[] args){
        int [] arr = {100,200,300,400};
        int k   = 2;
        System.out.println(subArray(arr,k));
    }
}

/*
Given an array of integers arr[] and an integer k, find the maximum possible sum among all contiguous subarrays of size exactly k.
A subarray is a sequence of consecutive elements from the original array. Return the maximum sum that can be obtained from any such subarray of length k.

Examples: 

Input  : arr[] = [100, 200, 300, 400],  k = 2
Output : 700
Explanation: We get maximum sum by adding subarray [300,400] of size 2

Input  : arr[] = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4 
Output : 39
Explanation: We get maximum sum by adding subarray [4, 2, 10, 23] of size 4.

Input  : arr[] = [2, 3], k = 1
Output : 3
Explanation: The subarrays of size 1 are [2] and [3]. The maximum sum is 3.


*/