public class Main{
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5};
        int minimum = arr[0];
        for(int i = 0; i<arr.length; i++){
            if(minimum > arr[i]){
                minimum  = arr[i];
            }
        }
        System.out.println(minimum);
    }
}

// find the minimum element in the array ;