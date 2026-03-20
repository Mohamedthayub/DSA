public class Main{
    public static void main(String[] args){
        boolean isSorted = true;
        int[] arr = {1,2,3,4,5};
        int [] arr2 = {5,4,2,1,9};
        for(int i = 0; i<arr2.length -1; i++){
            if(arr2[i] > arr2[i+1]){
                isSorted = false;
            }
        }
        if(isSorted){
            System.out.println("The Array is Sorted");
        }
        else{
            System.out.println("The Array is Not Sorted");
        }
    } 
}