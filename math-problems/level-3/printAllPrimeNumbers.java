public class Main{
    public static void main(String[] args){
        int N = 20;
        for(int i = 1; i<=N; i++){
            int count = 0;
            for(int j = 1; j<=i; j++){
                if(i % j == 0){
                    count = count + 1;
                }
            }
            if(count == 2){
                System.out.println("The Prime number is :" + i);
            }
            
        }
    }
}

/*
19. Print all prime numbers from 1 to N
n = 20

Output:

2 3 5 7 11 13 17 19
*/