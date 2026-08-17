public class Main{
    public static void main(String[] args){
        int num  = 58982;
        int largest = num % 10;
        while(num > 0){
            int lastdigit = num % 10;
            if(lastdigit > largest){
                largest = lastdigit;
            }
            num = num / 10;
        }
        System.out.println(largest);
    }
}
/*
16. Find largest digit
n = 58392

Output:

9
*/