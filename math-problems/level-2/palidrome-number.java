public class Main{
    public static void main(String[] args){
        int n = 123;
        int temp = n;
        int reverseNum = 0;
        while(n > 0){
            int lastdigit = n % 10;
            n = n / 10;
            reverseNum = (reverseNum * 10) + lastdigit;
        }
        if(reverseNum == temp){
            System.out.println("Palidrome number");
        }
        else{
            System.out.println("Not Palidrome number");
        }
    } 
}
/*
12. Check palindrome number
n = 1221

Output:

Palindrome
*/