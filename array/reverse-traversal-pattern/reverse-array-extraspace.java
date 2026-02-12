import java.util.Arrays;
public class Main{
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5};
        int[] temp = new int [arr.length];
        for(int i = 1; i<=arr.length; i++){
            temp[i-1] = arr[arr.length - i];
        }
        System.out.println(Arrays.toString(temp));
    }
}
/*
2️⃣ Reverse an Array (Extra Space)

Problem:
Reverse an array using a temporary array.

Input:
[10, 20, 30]

Output:
[30, 20, 10]

📌 Focus: temp[i] = arr[n-1-i]
*/