
public class Main{
    public static void main(String[] args){
        int[] arr = {5,5,5,5,4,5};
        int largest = -1;
        int Slargest =  - 1;
        for(int i  = 0 ; i<arr.length; i++){
            if(arr[i] > largest){
                largest = arr[i];
            }
        }
        for(int j = 0; j<arr.length; j++){
            if(arr[j] > Slargest && arr[j] != largest){
                Slargest = arr[j];
            }
        }
        System.out.println(Slargest);
    }
}
/*
1️⃣5️⃣ Second Largest Element

Find second largest number in array.

*/