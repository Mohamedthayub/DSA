public class Main{
    public static void main(String[] args){
        int[] arr =  {1,2,3,4,5};
        int odd = 0;
        int even = 0;
        for(int i = 0 ; i<arr.length; i++){
            if(arr[i] % 2 == 0){
                even++;
            }
            else{
                odd++;
            }
        }
        System.out.println("The Even Number :" + even);
        System.out.println("The Odd  Number  :" + odd);

    }  
}


// find how many even and odd numbers in the array;