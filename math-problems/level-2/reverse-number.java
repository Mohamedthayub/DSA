public class Main{
    public static void main(String[] args){
        int n = 12345;
        int reverseNum  = 0;
        while(n > 0){
            int lastDigit = n % 10;
            n = n / 10;
            reverseNum = (reverseNum * 10) + lastDigit;
        }   
        System.out.println(reverseNum);
    }
}
/*
11. Reverse a number
n = 12345

Output:

54321
*/