public class Main{
    public static void main(String[] args){
        int n = 123456;
        int odd = 0;
        int even = 0;
        while(n > 0){
            int lastdigit = n % 10;
            if(lastdigit % 2 == 0){
                even = even + 1;
            }
            else{
                odd = odd + 1;
            }
            n = n / 10;
        }
        System.out.println("Odd number :",odd);
        System.out.println("Even number: ",even);

    }
}

/*
15. Count even and odd digits
n = 123456

Output:

Even = 3
Odd = 3
*/