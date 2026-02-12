import java.util.Arrays;
public class Main{
    public static void main(String[] args){
        int[] arr = {1,2,3,3,2,1};
        boolean  isPalidrome = true;
        int left = 0;
        int right = arr.length -1;
        while(left < right){
            if(arr[left] !=  arr[right]){
                isPalidrome = false;
            }
            left++;
            right--;
        }
        System.out.println(isPalidrome);
    }
}

/*
Check If Array Is Palindrome

Problem:
Check whether array reads same forward & backward.

Input:
[1, 2, 3, 2, 1]

Output:
true
*/