public class Main{
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5,5};
        int largest = -1;
        for(int i = 0; i<arr.length; i++){
            if(arr[i] > largest){
                largest = arr[i];
            }
        }
       System.out.println(largest);
    }
}
/*
1️⃣2️⃣ Find Maximum Element

Find largest number in array
*/