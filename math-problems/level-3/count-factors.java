public class Main{
    public static void main(String[] args){
        int num = 20;
        int count = 0;
        for(int i = 1; i<=num; i++){
            if(num % i == 0){
                count = count + 1;
            }

        }
        System.out.println("The number of factors of : " + count);
        
    }
}


/*
21. Print All Factors

This is almost the same problem as #20.

Instead of counting:

count++

you print the factor.

Example:

n = 24
*/