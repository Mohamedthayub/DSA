public class Main{
    public static void main(String[] args){
        int digits = 58392;
        int sum =  0;
        while(digits > 0){
            sum = sum + digits % 10;
            digits  = digits / 10;
        }
        System.out.println(sum);
    }
}

/*
10. Find the sum of digits
n = 58392

Output:

27
*/