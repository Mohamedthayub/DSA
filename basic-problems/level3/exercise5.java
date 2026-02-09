public class Main{
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5,6};
        int even = 0;
        int odd = 0;
        for(int i = 0; i<arr.length; i++){
            if(arr[i] % 2 == 0){
                even++;
            }
            else{
                odd++;
            }
        }
        System.out.println("The Even Numbers is : " + even);
        System.out.println("The Even Numbers is : " + odd);
    }
}
/*

1️⃣3️⃣ Count Even & Odd Numbers

Count how many even and odd numbers
*/