public class Main{
    public static void main(String[] args){
        int[] arr = {1,2,4,5,6};
        int[] arr2 = {};
        int max = arr[0];
        if(arr.length == 0){
            System.out.println("The Array is Empty");
        }
        for(int i = 0; i<arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        System.out.println("The largest element is :" + max);
    }
}