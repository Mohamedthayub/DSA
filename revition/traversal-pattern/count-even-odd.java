public class Main{
    public static void main(String[] args){
        int even = 0;
        int odd = 0;
        int[] arr = {1,2,3,4,5};
        for(int i = 0; i< arr.length; i++){
            if(arr[i] % 2 == 0){
                even++;
            }
            else{
                odd++;
            }
        }
        System.out.println("The Even number is :" + even + " " + "The Odd Number is :" + odd);
    }
}