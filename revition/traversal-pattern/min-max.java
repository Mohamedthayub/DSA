import java.util.Arrays;
public class Main{
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5};
        int min = arr[0];
        int max = arr[0];
        if(arr.length == 0){
            System.out.println("The Array is Empty");   
        }
        for(int  i = 0; i<arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
            if(arr[i] < min){
                min = arr[i];
            }
        }
        int[] newArr = new int[2];
        newArr[0] = min;
        newArr[1] = max;
        System.out.println(Arrays.toString(newArr)); 
        System.out.println("The Max is :" + max + " " + "The min is :" + min);
    }
}

//