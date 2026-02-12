import java.util.Arrays;
public class Main{
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5};
        int left = 0;
        int right = arr.length - 1;
        while(left < right){
            int temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;

            left++;
            right--;
        }
        System.out.println(Arrays.toString(arr));
    }
}
/*

3️⃣ Reverse Array In-Place

Problem:
Reverse array without using extra space.

Input:
[1, 2, 3, 4]

Output:
[4, 3, 2, 1]
*/