public class Main{
    public static void main(String[] args){
        int n  = 58392;
        // int first_digit = n / 10;
        // System.out.println(first_digit);
        while(n >= 10){
            n = n / 10;
        }
        System.out.println(n);
    }
}
/*
13. Find first digit
n = 58392

Output:

5
*/