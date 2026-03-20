public class Main{
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5};
        // int[] arr = {5,5,5,5,5};
        int Slargest = -1;
        int largest = arr[0];
        for(int i = 0; i<arr.length; i++){
            if(arr[i] > largest){
                largest = arr[i];
            }
        }
        for(int j = 0 ; j<arr.length; j++){
            if(arr[j] != largest && arr[j] > Slargest){
                Slargest = arr[j];
            }
        }
        System.out.println("The Second Largest element is :" + Slargest);
    }
}
/*
Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.
Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.
Input: arr[] = [10, 10, 10]
Output: -1
Explanation: The largest element of the array is 10 and the second largest element does not exist.
*/