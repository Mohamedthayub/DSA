public class Main{
    public static void main(String[] args){
        int digits = 58392;
        int count = 0;
        while(digits > 0){
            count = count + 1;
            digits = digits / 10;
        }
        System.out.println(count);
    }
}
/*
9. Count the digits
n = 58392

Output:

5
*/