public class Main{
    static int  subArray(int[] arr,int k){
        
        if(arr.length  == 0  || k > arr.length || k <= 0){
            return 0;
        }
        int maxSum = 0;
        for(int i = 0; i<k ; i++){
            maxSum = maxSum + arr[i];
        }
        int windowSum  = maxSum;
        for(int  j = k ; j<arr.length; j++){
            windowSum = windowSum + arr[j] ;
            windowSum = windowSum - arr[j-k];
            
            maxSum = Math.max(maxSum, windowSum);
        }
        return maxSum;
    }
    public static void main(String[] args){
        int [] arr = {100,200,300,400};
        int [] arr2  = {1, 4, 2, 10, 23, 3, 1, 0, 20};
        int [] arr3 = {2, 3};
        int k   = 2;
        int k2  = 4;
        int k3 = 1;
        System.out.println(subArray(arr,k));
        System.out.println(subArray(arr2,k2));
        System.out.println(subArray(arr3,k3));

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