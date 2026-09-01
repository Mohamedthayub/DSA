public class Main{
    public static void main(String[] args){
        int number  = 6;
        int count = 0;
        for(int i = 1; i<=number; i++){
            if(number % i == 0){
                count  = count  + 1;
            }
        }
        if(count == 2){
            System.out.println("Prime number");
        }
        else{
            System.out.println("Not a Prime number");
        }
        
    }
}

/*
18. Check Whether a Number Is Prime
What is a prime number?

A prime number is a number that has exactly two factors:

1
itself

Examples:

2 → 1, 2        → Prime
3 → 1, 3        → Prime
5 → 1, 5        → Prime
7 → 1, 7        → Prime

But:

4 → 1, 2, 4     → Not Prime
6 → 1, 2, 3, 6  → Not Prime
*/