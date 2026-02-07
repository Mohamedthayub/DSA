public class Main{
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5};
        int[] temp = new int[arr.length];
        int index = 0;
        for(int i = arr.length - 1; i>=0; i--){
            temp[index] = arr[i];
            index++;
        }
        for(int num : temp){
            System.out.print(num + " ");
        }
    }
}

/*
1️⃣4️⃣ Reverse an Array

Example:

Input:  [1, 2, 3, 4]
Output: [4, 3, 2, 1]

*/